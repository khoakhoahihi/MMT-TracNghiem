(function () {
  "use strict";
  var QS = window.QUESTIONS || [];
  var CHN = { overview: "Ch1 Tổng quan", application: "Ch2 Tầng ứng dụng", transport: "Ch3 Tầng vận chuyển", network: "Ch4 Tầng mạng", link: "Ch5 Tầng liên kết", media: "Ch6 Truyền dẫn & Wi-Fi" };
  var CHK = Object.keys(CHN), KEY = "mmt.v2";
  var CFL = { verified: "Đã đối chiếu", derived: "Suy luận", unsure: "Chưa chắc" };
  var QMAP = {};
  QS.forEach(function (q) { QMAP[q.id] = q; });
  var theory = function () { return Array.isArray(window.THEORY) ? window.THEORY : []; };
  var $ = function (s) { return document.querySelector(s); };
  var wideMQ = window.matchMedia("(min-width:1100px)");

  // ---------- storage (localStorage when allowed, else just memory) ----------
  var DB = {};
  try { var raw = JSON.parse(localStorage.getItem(KEY)); if (raw && typeof raw === "object") DB = raw; } catch (e) {}
  if (!Array.isArray(DB.history)) DB.history = [];
  if (!Array.isArray(DB.subs)) DB.subs = [];
  if (!DB.att || typeof DB.att !== "object") DB.att = {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(DB)); } catch (e) {} }

  // ---------- helpers ----------
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmt(s) { s = Math.max(0, Math.floor(s)); return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0"); }
  function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
  function short(c) { return CHN[c].split(" ")[0]; }

  function wrong() {
    var last = {};
    DB.history.forEach(function (h) { last[h.id] = h.ok; });
    return QS.filter(function (q) { return last[q.id] === false; });
  }
  function sample(n) { // stratified: quota per chapter proportional to bank size (largest remainder)
    var g = {}, tot = QS.length;
    QS.forEach(function (q) { (g[q.chapter] = g[q.chapter] || []).push(q); });
    var qs = Object.keys(g).map(function (k) { var x = n * g[k].length / tot; return { k: k, f: Math.floor(x), r: x - Math.floor(x) }; });
    var left = n - qs.reduce(function (s, o) { return s + o.f; }, 0), out = [];
    qs.slice().sort(function (a, b) { return b.r - a.r; }).forEach(function (o) { if (left > 0 && o.r > 0) { o.f++; left--; } });
    qs.forEach(function (o) { out = out.concat(shuffle(g[o.k]).slice(0, o.f)); });
    return shuffle(out);
  }
  function idsFor(e) {
    var a;
    if (e === "gk") a = QS.filter(function (q) { return q.id.indexOf("gk2425-") === 0; });
    else if (e === "all") a = QS;
    else if (e.indexOf("ch:") === 0) a = QS.filter(function (q) { return q.chapter === e.slice(3); });
    else if (e === "unsure") a = QS.filter(function (q) { return q.confidence === "unsure"; });
    else if (e === "wrong") a = wrong();
    else a = sample(Math.min(70, QS.length));
    return a.map(function (q) { return q.id; });
  }
  function examList() {
    var cnt = {}, L = [], gk = idsFor("gk").length, un = idsFor("unsure").length;
    QS.forEach(function (q) { cnt[q.chapter] = (cnt[q.chapter] || 0) + 1; });
    L.push({ id: "all", name: "Toàn bộ ngân hàng (" + QS.length + ")" });
    if (gk) L.push({ id: "gk", name: "Đề giữa kỳ 2024-25 thật (" + gk + "c)" });
    CHK.forEach(function (c) { if (cnt[c]) L.push({ id: "ch:" + c, name: CHN[c] + " (" + cnt[c] + ")" }); });
    L.push({ id: "unsure", name: "Chỉ câu chưa chắc đáp án (unsure) (" + un + ")" });
    L.push({ id: "wrong", name: "Ôn câu sai (từ lịch sử) (" + wrong().length + ")" });
    L.push({ id: "rand", name: "Đề ngẫu nhiên " + Math.min(70, QS.length) + " câu" });
    return L;
  }
  function examName(id) { var r = examList().filter(function (e) { return e.id === id; })[0]; return r ? r.name : id; }

  // ---------- attempts ----------
  var cur = { exam: "all", mode: "practice" }, A = null, flt = "all", ltab = "exam", rtab = "exp", expOpen = true, thOv = null, L = wideMQ.matches, R = wideMQ.matches, ticks = 0;
  if (DB.cur && DB.cur.exam && DB.cur.mode) cur = { exam: DB.cur.exam, mode: DB.cur.mode };
  if (!examList().some(function (e) { return e.id === cur.exam; })) cur.exam = examList()[0].id;

  function el(a) { return a.spent + (a.since ? (Date.now() - a.since) / 1000 : 0); }
  function pause() { if (A && A.since) { A.spent = el(A); A.since = null; } }
  function mkAtt(exam, mode) {
    var ids = idsFor(exam), n = ids.length, mins = n === 70 ? 50 : Math.max(5, Math.round(0.7 * n));
    return { ids: ids, perm: {}, picks: {}, i: 0, spent: 0, since: 0, sub: null, limit: mode === "exam" ? mins * 60 : 0 };
  }
  function openAtt(exam, mode, fresh) {
    pause();
    cur = { exam: exam, mode: mode };
    var key = exam + "|" + mode;
    if (fresh || !DB.att[key]) DB.att[key] = mkAtt(exam, mode);
    A = DB.att[key];
    A.ids = A.ids.filter(function (id) { return QMAP[id]; });
    A.ids.forEach(function (id) { // keep option order stable for the attempt; rebuild only if the question changed
      var n = QMAP[id].options.length;
      if (!A.perm[id] || A.perm[id].length !== n) { var r = []; for (var i = 0; i < n; i++) r.push(i); A.perm[id] = shuffle(r); }
    });
    if (A.i >= A.ids.length || A.i < 0) A.i = 0;
    if (!A.sub && A.ids.length) A.since = Date.now();
    DB.cur = cur; flt = "all"; thOv = null; save();
  }

  // ---------- per-question state ----------
  function qid(i) { return A.ids[i]; }
  function fbOn(i) { return !!A.sub || (cur.mode === "practice" && A.picks[qid(i)] != null); }
  function st(i) {
    var p = A.picks[qid(i)];
    if (p == null) return "na";
    if (!fbOn(i)) return "sel";
    return p === QMAP[qid(i)].answer ? "ac" : "wa";
  }
  function counts() {
    var c = { ac: 0, wa: 0, ans: 0 };
    A.ids.forEach(function (id, i) { var s = st(i); if (s === "ac") c.ac++; else if (s === "wa") c.wa++; if (s !== "na") c.ans++; });
    return c;
  }
  function match(i) {
    var s = st(i);
    if (flt === "all") return true;
    if (flt === "ac") return s === "ac";
    if (flt === "wa") return s === "wa" || (!!A.sub && s === "na");
    return QMAP[qid(i)].chapter === flt;
  }

  // ---------- actions ----------
  function goto(i) {
    if (i < 0 || i >= A.ids.length) return;
    A.i = i; thOv = null;
    if (!wideMQ.matches) L = false;
    save(); render(); $("#center").scrollTop = 0;
  }
  function pick(d) {
    if (!A.ids.length || A.sub) return;
    var id = qid(A.i), q = QMAP[id], o = A.perm[id][d];
    if (o == null) return;
    if (cur.mode === "practice") {
      if (A.picks[id] != null) return; // first answer locks and counts
      A.picks[id] = o;
      DB.history.push({ id: id, ok: o === q.answer, t: Date.now() });
    } else A.picks[id] = o;
    save(); render();
  }
  function submit(auto) {
    if (!A || A.sub || !A.ids.length) return;
    var un = A.ids.filter(function (id) { return A.picks[id] == null; }).length;
    if (!auto && un && !confirm("Còn " + un + " câu chưa làm. Nộp bài?")) return;
    pause();
    var secs = Math.round(A.limit ? Math.min(A.spent, A.limit) : A.spent), t = Date.now(), ch = {}, c = 0, n = A.ids.length;
    A.ids.forEach(function (id) {
      var q = QMAP[id], ok = A.picks[id] === q.answer, a = ch[q.chapter] || (ch[q.chapter] = [0, 0]);
      a[1]++; if (ok) { a[0]++; c++; }
      if (cur.mode === "exam") DB.history.push({ id: id, ok: ok, t: t }); // practice already logged per answer
    });
    A.sub = { exam: cur.exam, name: examName(cur.exam), mode: cur.mode, score: Math.round(1000 * c / n) / 100, c: c, n: n, secs: secs, t: t, ch: ch, auto: !!auto };
    DB.subs.unshift(A.sub); DB.subs = DB.subs.slice(0, 200);
    save(); render(); showRes();
  }
  function again() {
    openAtt(cur.exam, cur.mode, true); render(); $("#center").scrollTop = 0;
  }
  function tick() {
    if (!A || !A.ids.length) return;
    if (!A.sub && A.limit && el(A) >= A.limit) { submit(true); return; }
    paintTime();
    if (!A.sub && ++ticks % 10 === 0) { A.spent = el(A); A.since = Date.now(); save(); }
  }

  // ---------- views ----------
  function bar(name, a) {
    var p = pct(a[0], a[1]);
    return '<div class="brow"><div class="bl"><span>' + esc(name) + "</span><b>" + (a[1] ? a[0] + "/" + a[1] + " (" + p + "%)" : "chưa làm") + '</b></div><div class="meter"><i style="width:' + p + '%"></i></div></div>';
  }
  function paintTime() {
    var s = A.sub ? A.sub.secs : A.limit ? Math.ceil(A.limit - el(A)) : el(A), b = $("#bTime");
    b.textContent = (A.sub ? "Đã dùng " : A.limit ? "Còn " : "") + fmt(s);
    b.classList.toggle("low", !!A.limit && !A.sub && s < 300);
  }
  function renderTop() {
    var sel = $("#selExam"), h = examList().map(function (e) { return '<option value="' + e.id + '">' + esc(e.name) + "</option>"; }).join("");
    if (sel.dataset.h !== h) { sel.innerHTML = h; sel.dataset.h = h; }
    sel.value = cur.exam;
    Array.prototype.forEach.call(document.querySelectorAll(".seg button"), function (b) { b.setAttribute("aria-pressed", b.dataset.m === cur.mode); });
    var c = counts(), n = A.ids.length, fb = !!A.sub || cur.mode === "practice";
    $("#bScore").textContent = (fb ? "Điểm " + c.ac : "Đã làm " + c.ans) + "/" + n;
    $("#bAc").hidden = $("#bWa").hidden = !fb;
    $("#bAc").textContent = c.ac + " AC"; $("#bWa").textContent = c.wa + " WA";
    $("#bTime").hidden = !n;
    if (n) paintTime();
    $("#bMenu").setAttribute("aria-expanded", L); $("#bRef").setAttribute("aria-expanded", R);
    var top = $("#bSubTop"), bot = $("#bSubBot");
    top.textContent = A.sub ? "Kết quả" : "Nộp bài"; top.dataset.act = A.sub ? "result" : "submit";
    bot.textContent = A.sub ? "Làm lại" : "Nộp bài"; bot.dataset.act = A.sub ? "again" : "submit";
    top.disabled = bot.disabled = !n;
    $("#bPrev").disabled = A.i <= 0; $("#bNext").disabled = A.i >= n - 1;
    $("#bExp").setAttribute("aria-pressed", expOpen); $("#bExp").disabled = !n;
    $("#bProg").textContent = "Tiến độ: " + c.ans + "/" + n + " (" + pct(c.ans, n) + "%)";
    document.body.classList.toggle("L", L); document.body.classList.toggle("R", R);
  }
  function tabs(sel, now) {
    Array.prototype.forEach.call(document.querySelectorAll(sel + " [role=tab]"), function (b) { b.setAttribute("aria-selected", b.dataset.t === now); });
  }
  function leftExam() {
    var c = counts(), n = A.ids.length, h = '<div class="prow"><span>TIẾN ĐỘ THI ĐẤU</span><b>' + c.ans + "/" + n + " (" + pct(c.ans, n) + '%)</b></div><div class="meter"><i style="width:' + pct(c.ans, n) + '%"></i></div><div class="chips">';
    function chip(v, label) { return '<button data-act="chip" data-v="' + v + '" data-f="k' + v + '" aria-pressed="' + (flt === v) + '">' + esc(label) + "</button>"; }
    var cc = {};
    A.ids.forEach(function (id) { var k = QMAP[id].chapter; cc[k] = (cc[k] || 0) + 1; });
    h += chip("all", "Tất cả (" + n + ")");
    CHK.forEach(function (k) { if (cc[k]) h += chip(k, short(k) + " (" + cc[k] + ")"); });
    if (A.sub || cur.mode === "practice") h += chip("ac", "AC") + chip("wa", "WA");
    h += '</div><div class="grid">';
    A.ids.forEach(function (id, i) {
      if (!match(i)) return;
      var s = st(i);
      h += '<button class="cell ' + s + '" data-act="go" data-i="' + i + '" data-f="c' + i + '"' + (i === A.i ? ' aria-current="true"' : "") + ' aria-label="Câu ' + (i + 1) + (s === "ac" ? ", đúng" : s === "wa" ? ", sai" : s === "sel" ? ", đã chọn" : "") + '">' + (i + 1) + "</button>";
    });
    return h + "</div>" + (n ? "" : '<p class="muted">Đề này chưa có câu hỏi.</p>');
  }
  function chaps() { return CHK.filter(function (c) { return QS.some(function (q) { return q.chapter === c; }) || theory().some(function (t) { return t.chapter === c; }); }); }
  function leftBook() {
    var ch = chaps();
    if (!ch.length) return '<p class="muted">Chưa có chương nào.</p>';
    return ch.map(function (c) {
      var t = theory().filter(function (x) { return x.chapter === c; })[0];
      return '<button class="chcard" data-act="ch" data-c="' + c + '" data-f="h' + c + '"><b>' + esc(t && t.title ? t.title : CHN[c]) + "</b><small>Nhấn để xem lý thuyết &amp; công thức chi tiết</small></button>";
    }).join("");
  }
  function leftHist() {
    var agg = {}, tot = [0, 0];
    DB.history.forEach(function (h) {
      var q = QMAP[h.id]; if (!q) return;
      var a = agg[q.chapter] || (agg[q.chapter] = [0, 0]);
      a[1]++; tot[1]++; if (h.ok) { a[0]++; tot[0]++; }
    });
    var h = "<h2>Độ chính xác theo chương</h2>" + bar("Tổng cộng", tot);
    chaps().forEach(function (c) { h += bar(CHN[c], agg[c] || [0, 0]); });
    h += "<h2>Các lần nộp</h2>";
    if (!DB.subs.length) h += '<p class="muted">Chưa có bài nộp nào.</p>';
    DB.subs.forEach(function (s) {
      h += '<div class="sub"><div><b>' + esc(s.name) + "</b><small>" + (s.mode === "exam" ? "Thi" : "Luyện tập") + " · " + new Date(s.t).toLocaleString("vi-VN") + '</small></div><div class="sc"><b>' + s.score + "</b>/10<small>" + s.c + "/" + s.n + " · " + fmt(s.secs) + "</small></div></div>";
    });
    return h + '<button class="danger" data-act="clear">Xóa lịch sử</button>';
  }
  function renderLeft() {
    tabs("#left", ltab);
    $("#lpane").innerHTML = ltab === "exam" ? leftExam() : ltab === "book" ? leftBook() : leftHist();
  }
  function emptyMsg() {
    return { wrong: "Chưa có câu sai nào cần ôn. Hãy luyện tập hoặc làm đề trước.", unsure: "Hiện không có câu nào chưa chắc đáp án." }[cur.exam] || "Đề này chưa có câu hỏi.";
  }
  function renderCenter() {
    var c = $("#center");
    if (!A.ids.length) { c.innerHTML = '<div class="card empty">' + emptyMsg() + "</div>"; return; }
    var id = qid(A.i), q = QMAP[id], fb = fbOn(A.i), pk = A.picks[id];
    var h = '<div class="card"><p class="pid">Problem <b>' + esc(q.id) + '</b>.</p><div class="metar"><span>Chương: <b>' + esc(CHN[q.chapter] || q.chapter) + "</b></span><span>Nguồn: <b>" + esc(q.source || "") + '</b></span><span>Độ tin cậy: <span class="tag ' + esc(q.confidence) + '">' + esc(CFL[q.confidence] || q.confidence) + "</span></span></div>";
    if (q.confidence === "unsure") h += '<div class="warn">Đáp án chưa chắc chắn – tự kiểm tra lại</div>';
    h += '<div class="lbl">PROBLEM STATEMENT</div><p class="q">' + esc(q.q) + '</p><div role="group" aria-label="Các đáp án">';
    A.perm[id].forEach(function (o, d) {
      var cls = "opt";
      if (fb && o === q.answer) cls += " ok"; else if (fb && pk === o) cls += " bad"; else if (pk === o) cls += " sel";
      if (fb || A.sub) cls += " lock";
      h += '<button class="' + cls + '" data-act="pick" data-d="' + d + '" data-f="o' + d + '" aria-pressed="' + (pk === o) + '"><span class="chip">' + "ABCDEF".charAt(d) + "</span><span>" + esc(q.options[o]) + "</span></button>";
    });
    h += "</div>";
    if (fb) h += '<p><b style="color:var(--' + (pk === q.answer ? "ok" : "bad") + ')">' + (pk == null ? "Bỏ trống." : pk === q.answer ? "Đúng." : "Sai.") + "</b></p>";
    h += '<div class="exp"><button data-act="exp" data-f="e" aria-expanded="' + expOpen + '">LỜI GIẢI THAM KHẢO &amp; PHÂN TÍCH CHI TIẾT ' + (expOpen ? "▾" : "▸") + "</button>";
    if (expOpen) h += "<div>" + (fb ? esc(q.explain) : '<span class="muted">' + (cur.mode === "exam" ? "Nộp bài để xem lời giải." : "Chọn một đáp án để xem lời giải.") + "</span>") + "</div>";
    c.innerHTML = h + "</div></div>";
  }
  function theoryHtml(c, onlyFormula) {
    var secs = [];
    theory().forEach(function (t) { if (t.chapter === c && Array.isArray(t.sections)) secs = secs.concat(t.sections); });
    if (onlyFormula) secs = secs.filter(function (s) { return s.formula; });
    if (!secs.length) return '<p class="muted">' + (onlyFormula ? "Chưa có công thức cho chương này." : "Chưa có bài giảng cho chương này.") + "</p>";
    return secs.map(function (s) {
      return "<h3>" + esc(s.h || "") + "</h3>" + (s.body || []).map(function (b) { return '<div class="tb">' + b + "</div>"; }).join(""); // trusted local content
    }).join("");
  }
  function renderRight() {
    tabs("#right", rtab);
    var p = $("#rpane"), q = A.ids.length ? QMAP[qid(A.i)] : null;
    if (rtab === "exp") {
      if (!q) { p.innerHTML = '<p class="muted">Chưa có câu hỏi.</p>'; return; }
      if (!fbOn(A.i)) { p.innerHTML = '<p class="muted">' + (cur.mode === "exam" ? "Nộp bài để xem luận giải." : "Chọn một đáp án để xem luận giải.") + "</p>"; return; }
      p.innerHTML = '<h2>' + esc(q.id) + "</h2><p><b>Đáp án đúng:</b> " + esc(q.options[q.answer]) + "</p><p>" + esc(q.explain) + '</p><p class="muted">Nguồn: ' + esc(q.source || "") + '</p><p>Độ tin cậy: <span class="tag ' + esc(q.confidence) + '">' + esc(CFL[q.confidence] || q.confidence) + "</span></p>" +
        (q.confidence === "unsure" ? '<div class="warn">Đáp án chưa chắc chắn – tự kiểm tra lại</div>' : "");
      return;
    }
    var c = thOv || (q && q.chapter);
    p.innerHTML = c ? '<div class="th"><h2>' + esc(CHN[c]) + "</h2>" + theoryHtml(c, rtab === "fm") + "</div>" : '<p class="muted">Chọn một câu hoặc một chương để xem.</p>';
  }
  function render() {
    var f = document.activeElement && document.activeElement.dataset && document.activeElement.dataset.f;
    renderTop(); renderLeft(); renderCenter(); renderRight();
    if (f) { var n = $('[data-f="' + f + '"]'); if (n) n.focus(); }
  }

  // ---------- results modal ----------
  function showRes() {
    var s = A.sub, res = $("#res"), nw = 0, h;
    h = "<h2>Kết quả · " + esc(s.name) + '</h2><div class="big">' + s.score + "<small>/10</small></div><p>" + s.c + "/" + s.n + " câu đúng (" + pct(s.c, s.n) + "%) · Thời gian: " + fmt(s.secs) + (s.auto ? " · Hết giờ, tự nộp bài" : "") + "</p><h2>Theo chương</h2>";
    CHK.forEach(function (c) { if (s.ch[c]) h += bar(CHN[c], s.ch[c]); });
    h += '<h2>Xem lại</h2><div class="rg">';
    A.ids.forEach(function (id, i) { var t = st(i); if (t !== "ac") nw++; h += '<button class="cell ' + t + '" data-act="go" data-i="' + i + '" aria-label="Câu ' + (i + 1) + '">' + (i + 1) + "</button>"; });
    h += '</div><div class="row">' + (nw ? '<button class="btn pri" data-act="wrongs">Xem lại câu sai (' + nw + ")</button>" : "") + '<button class="btn" data-act="again">Làm lại</button><button class="btn" data-act="close">Đóng</button></div>';
    res.innerHTML = h;
    if (!res.open) res.showModal();
  }
  function closeRes() { var r = $("#res"); if (r.open) r.close(); }

  // ---------- events ----------
  function setMode(m) { if (m !== cur.mode) { openAtt(cur.exam, m, false); render(); } }
  document.addEventListener("click", function (e) {
    if (e.target === $("#res")) { closeRes(); return; }
    var b = e.target.closest("[data-act]"); if (!b || b.disabled) return;
    var a = b.dataset.act;
    if (a === "menu") { L = !L; if (L && !wideMQ.matches) R = false; render(); }
    else if (a === "ref") { R = !R; if (R && !wideMQ.matches) L = false; render(); }
    else if (a === "scrim") { L = R = false; render(); }
    else if (a === "ltab") { ltab = b.dataset.t; render(); }
    else if (a === "rtab") { rtab = b.dataset.t; render(); }
    else if (a === "mode") setMode(b.dataset.m);
    else if (a === "chip") { flt = b.dataset.v; render(); }
    else if (a === "go") { closeRes(); goto(+b.dataset.i); }
    else if (a === "pick") pick(+b.dataset.d);
    else if (a === "prev") goto(A.i - 1);
    else if (a === "next") goto(A.i + 1);
    else if (a === "exp") { expOpen = !expOpen; render(); }
    else if (a === "submit") submit(false);
    else if (a === "result") showRes();
    else if (a === "again") { closeRes(); again(); }
    else if (a === "close") closeRes();
    else if (a === "wrongs") {
      closeRes(); ltab = "exam"; flt = "wa"; L = true; if (!wideMQ.matches) R = false;
      var i = 0; while (i < A.ids.length && !match(i)) i++;
      if (i < A.ids.length) { A.i = i; thOv = null; } render();
    }
    else if (a === "ch") { thOv = b.dataset.c; rtab = "th"; R = true; if (!wideMQ.matches) L = false; render(); $("#rpane").scrollTop = 0; }
    else if (a === "clear") { if (confirm("Xóa toàn bộ lịch sử làm bài và thống kê?")) { DB.history = []; DB.subs = []; save(); render(); } }
  });
  $("#selExam").addEventListener("change", function () {
    var v = this.value; openAtt(v, cur.mode, v === "rand" || v === "wrong"); render();
  });
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || $("#res").open) return;
    var t = e.target, tag = t.tagName, k = e.key;
    if (tag === "SELECT" || tag === "INPUT" || tag === "TEXTAREA") return;
    if (/^[1-6]$/.test(k)) pick(+k - 1);
    else if (/^[a-dA-D]$/.test(k)) pick(k.toLowerCase().charCodeAt(0) - 97);
    else if (k === "e" || k === "E") { expOpen = !expOpen; render(); }
    else if (k === "ArrowLeft") { e.preventDefault(); goto(A.i - 1); }
    else if (k === "ArrowRight") { e.preventDefault(); goto(A.i + 1); }
    else if (k === "Enter") {
      if (tag === "BUTTON" && !t.classList.contains("opt") && !t.classList.contains("cell")) return; // native click
      e.preventDefault(); goto(A.i + 1);
    }
  });
  var wasWide = wideMQ.matches;
  function onResize() { if (wideMQ.matches !== wasWide) { wasWide = wideMQ.matches; L = R = wasWide; render(); } }
  if (wideMQ.addEventListener) wideMQ.addEventListener("change", onResize); else wideMQ.addListener(onResize);
  window.addEventListener("pagehide", function () { if (A && !A.sub) { A.spent = el(A); A.since = A.since ? Date.now() : 0; save(); } });

  openAtt(cur.exam, cur.mode, false);
  render();
  setInterval(tick, 1000);
})();
