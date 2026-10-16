import json, collections, pathlib
d = pathlib.Path(__file__).parent
qs = json.loads((d / "questions.js").read_text(encoding="utf-8").split("=", 1)[1].strip().rstrip(";"))
for f in sorted(d.glob("q-*.js")):  # format: window.QUESTIONS.push(...[ JSON array ]);
    t = f.read_text(encoding="utf-8").strip()
    assert t.startswith("window.QUESTIONS.push(...") and t.endswith(");"), f.name + ": bad wrapper"
    qs += json.loads(t[len("window.QUESTIONS.push(...") : -2])
CH = {"overview", "application", "transport", "network", "link", "media"}
CF = {"verified", "derived", "unsure"}
ids = [q["id"] for q in qs]
assert len(ids) == len(set(ids)), "duplicate ids"
texts = [q["q"].strip().lower() for q in qs]
assert len(texts) == len(set(texts)), "duplicate question text: " + str([t for t, n in collections.Counter(texts).items() if n > 1])
gk = [i for i in ids if i.startswith("gk2425-")]
assert gk == [f"gk2425-{i:03d}" for i in range(1, 71)], "gk2425 ids not 001..070"
for q in qs:
    assert 2 <= len(q["options"]) <= 6, q["id"]
    assert len(set(q["options"])) == len(q["options"]), q["id"] + ": duplicate options"
    assert 0 <= q["answer"] < len(q["options"]), q["id"]
    assert q.get("source"), q["id"]
    assert q["confidence"] in CF, q["id"]
    assert q["chapter"] in CH, q["id"]
    assert q["q"] and q["explain"], q["id"]
print(len(qs), "questions OK")
print(dict(collections.Counter(q["confidence"] for q in qs)))
print("chapters", dict(collections.Counter(q["chapter"] for q in qs)))
print("answer position", dict(sorted(collections.Counter(q["answer"] for q in qs).items())))
print("unsure:", [q["id"] for q in qs if q["confidence"] == "unsure"])
