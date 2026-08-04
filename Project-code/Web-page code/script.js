let healthData={
    heartRate:74,
    spo2:98,
    bodyTemp:98.4,
    airTemp:27.3,
    airPressure:1012,
    status:"Online",
    tip:"Stay hydrated and drink at least 8 glasses of water every day."
};

function updateDashboard(){
    document.getElementById("heartRate").innerHTML=healthData.heartRate;
    document.getElementById("spo2").innerHTML=healthData.spo2;
    document.getElementById("bodyTemp").innerHTML=healthData.bodyTemp;
    document.getElementById("airTemp").innerHTML=healthData.airTemp;
    document.getElementById("pressure").innerHTML=healthData.airPressure;
    document.getElementById("status").innerHTML=healthData.status;
    document.getElementById("tipText").innerHTML=healthData.tip;
    document.getElementById("lastUpdated").innerHTML=new Date().toLocaleString();
    analyseHealth();
}

function analyseHealth(){
    let analysis="";

    if(healthData.heartRate<60){
        analysis+="🟡 Heart rate is lower than normal.<br>";
    }
    else if(healthData.heartRate>100){
        analysis+="🔴 Heart rate is higher than normal.<br>";
    }
    else{
        analysis+="🟢 Heart rate is normal.<br>";
    }

    if(healthData.spo2<95){
        analysis+="🔴 Oxygen level is low.<br>";
    }
    else{
        analysis+="🟢 Oxygen level is healthy.<br>";
    }

    if(healthData.bodyTemp>99.5){
        analysis+="🟠 Body temperature is above normal.<br>";
    }
    else{
        analysis+="🟢 Body temperature is normal.<br>";
    }

    if(healthData.airPressure<980||healthData.airPressure>1035){
        analysis+="⚠ Air pressure is outside the normal range.";
    }
    else{
        analysis+="🟢 Air pressure is normal.";
    }

    document.getElementById("analysisText").innerHTML=analysis;
}

function randomUpdate(){
    healthData.heartRate=Math.floor(Math.random()*35)+65;
    healthData.spo2=Math.floor(Math.random()*4)+96;
    healthData.bodyTemp=(97+Math.random()*2).toFixed(1);
    healthData.airTemp=(25+Math.random()*5).toFixed(1);
    healthData.airPressure=Math.floor(Math.random()*20)+1005;
    updateDashboard();
}

updateDashboard();
setInterval(randomUpdate,5000);