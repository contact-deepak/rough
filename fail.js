// ❌ Hardcoded credentials (Security Issue)
const username = "admin";
const password = "123456";

// ❌ Unused variable (Bug)
let unusedVar = "I am never used";

// ❌ Function returns inconsistent types (Maintainability Issue)
function badFunction(input) {
    if (input === "number") {
        return 42;
    } else {
        return "A string instead"; // ❌ Inconsistent return type
    }
}

// ❌ Duplicate code (Code Smell)
function duplicate1() {
    console.log("This is duplicate code");
}
function duplicate2() {
    console.log("This is duplicate code"); // ❌ Duplicated logic
}

// ❌ Dangerous eval usage (Security Issue)
function insecureFunction(userInput) {
    eval(userInput); // ⚠️ Never use eval() due to security risks!
}

// ❌ Unreachable code (Bug)
function unreachableCode() {
    return;
    console.log("This will never execute");
}

console.log(badFunction("number"));
insecureFunction("console.log('Hacked!')");
