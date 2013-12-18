var assert = require("assert");
var compiler = require('./compiler.js');

describe('compiler', function() {
    it('should parse empty program', function(){
        var out = compiler.buildAst("");
        assert.deepEqual(out, {"type": "Program", "elements": []})
    });

    it('should compile empty function ', function(){
        var out = compiler.compile("function main(){}");
        assert.deepEqual(out, [{"name": "main",
            "arguments": 0,
            "localVariables": 0,
            "instructions": ["return"]}])
    });

    it('should compile array definition', function(){
        var out = compiler.compile("function main(){var array = []}");
        assert.deepEqual(out, [{"name": "main",
            "arguments": 0,
            "localVariables": 1,
            "instructions": [
                "new_array",
                "store 0",
                "return"
            ]}])
    });
});