const _ = require("lodash");
const assert = require("chai").assert;
const responses = require("..");

describe("turbot-responses", function() {
  describe("Format", function() {
    Object.keys(responses).forEach(k => {
      describe(k, function() {
        it("has camelcase format for key", function() {
          assert.strictEqual(k, _.camelCase(k));
        });
        it("has code and message fields only", function() {
          assert.hasAllKeys(responses[k], ["code", "message"]);
        });
        it("has integer code", function() {
          assert.isFinite(responses[k].code);
        });
        it("has short string message < 100 chars long", function() {
          assert.isString(responses[k].message);
          assert.isAbove(responses[k].message.length, 0);
          assert.isBelow(responses[k].message.length, 100);
        });
      });
    });
  });

  describe("Specific type checks", function() {
    describe("ok", function() {
      it("has message OK", function() {
        assert.equal(responses.ok.message, "OK");
      });
      it("has code 200", function() {
        assert.equal(responses.ok.code, 200);
      });
    });
  });
});
