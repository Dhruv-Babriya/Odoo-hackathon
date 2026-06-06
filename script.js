function signup()
{
let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let role =
document.getElementById("role").value;

if(name=="" || email=="" || password=="")
{
alert("Fill all fields");
return;
}

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userPassword",
password
);

localStorage.setItem(
"role",
role
);

alert("Account Created");

window.location="index.html";
}

function login()
{
    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    let savedEmail =
        localStorage.getItem("userEmail");

    let savedPassword =
        localStorage.getItem("userPassword");

    if(email == savedEmail &&
        password == savedPassword)
    {
        let role = localStorage.getItem("role");

        // separate flows
        if ((role || "").trim().toLowerCase() === "vendor") {
            window.location = "vendorDashboard.html";
        } else {
            window.location = "vendorDashboard.html";
        }
    }
    else
    {
        alert("Invalid Login");
    }
}



// -----------------------------
// Guided flow (Admin + Vendor)
// -----------------------------

const FLOW_KEYS = {
    selectedRFQ: "flow.selectedRFQ",
    selectedQuotation: "flow.selectedQuotation",
    approvalDecision: "flow.approvalDecision",
    generatedPO: "flow.generatedPO",
    role: "role"
};

const FLOW_STEPS = [
    "RFQ",
    "VENDOR_QUOTATION",
    "QUOTATION_COMPARISON",
    "APPROVAL",
    "PURCHASE",
    "ACTIVITY"
];

function _safeJsonParse(raw){
    try{
        return JSON.parse(raw);
    }catch(e){
        return raw;
    }
}

function setFlowState(key, value){
    try{
        localStorage.setItem(key, JSON.stringify(value));
    }catch(e){
        console.error("setFlowState failed", e);
    }
}

function getFlowState(key){
    try{
        let raw = localStorage.getItem(key);
        if(!raw) return null;
        return _safeJsonParse(raw);
    }catch(e){
        console.error("getFlowState failed", e);
        return null;
    }
}

function requireFlowState(key){
    let val = getFlowState(key);
    if(!val){
        alert("Missing required data. Please complete the previous step first.");
        return null;
    }
    return val;
}

function clearGuidedFlow(){
    Object.values(FLOW_KEYS).forEach(k => {
        try{ localStorage.removeItem(k); }catch(e){}
    });
}

function goTo(path){
    window.location = path;
}

function markFlowStep(stepName){
    setFlowState("flow.currentStep", stepName);
}

function requireStep(stepName, requireKey){
    // If we are missing requiredKey then block navigation.
    if(requireKey){
        let v = getFlowState(requireKey);
        if(!v){
            alert("Please complete the previous step first.");
            return false;
        }
    }
    markFlowStep(stepName);
    return true;
}


function resetPassword(){
alert(
"Password Reset Link Sent"
);
}
