
// Lookup table for both smoking and cholesterol age ranges
const cholSmokAgeRanges = new Array(20, 40, 50, 60, 70);

// Lookup tables for Cholesterol
const femaleCholesterolScores = [[0, 4, 8, 11, 13], [0, 3, 6, 8, 10], [0, 2, 4, 5, 7], [0, 1, 2, 3, 4], [0, 1, 1, 2, 2]];
const maleCholesterolScore = [[0, 4, 7, 9, 11], [0, 3, 5, 6, 8], [0, 2, 3, 4, 5], [0, 1, 1, 2, 3], [0, 0, 0, 1, 1]];

// Lookup tables for smokers
const femaleSmokerScores = [9, 7, 4, 2, 1];
const maleSmokerScores = [8, 5, 3, 1, 1];

// Lookup tables for age scores
const ageRanges = [20, 35, 40, 45, 50, 55, 60, 65, 70, 75];
const femaleAgeScores = [-7, -3, 0, 3, 6, 8, 10, 12, 14, 16];
const maleAgeScores = [-9, -4, 0, 3, 6, 8, 10, 11, 12, 13];

// Lookup tables for HDL Cholesterol
const HDLscores = [2, 1, 0, -1];

// Lookup tables for blood pressure
const femaleTBPscores = [0, 3, 4, 5, 6];
const femaleUTBPscores = [0, 1, 2, 3, 4];
const maleTBPscores = [0, 1, 2, 2, 3];
const maleUTBPscores = [0, 0, 1, 1, 2];

// Lookup tables for total scores and percentages
const femaleTotalRanges = [-20, 9, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
const maleTotalRanges = [-20, 1, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const tenYearRiskFemale = ["< 1%", "1%", "2%", "3%", "4%", "5%", "6%", "8%", "11%", "14%", "17%", "22%", "27%", "> 30%"];
const tenYearRiskMale = ["< 1%", "1%", "2%", "3%", "4%", "5%", "6%", "8%", "10%", "12%", "16%", "20%", "25%", "> 30%"];

let male = true;
let smoker = false;
let BPtreated = false;
let cholesterolIndex = 0;
let HDLCholesterolIndex = 0;
let bloodPressureIndex = 0;
let age = 25;
let score = 0;
let riskPercent = 0;

// Function for settings various values called by buttons etc.
function setCholesterolIndex(index){
    cholesterolIndex = index;
}

function setHDLCholesterolIndex(index){
    HDLCholesterolIndex = index;
}

function setSmokerValue(smokes){
    smoker = smokes;
    smokerButtonClick();
}

function setBPIndex(index){
    bloodPressureIndex = index;
}

function setBPTreated(treated){
    BPtreated = treated;
    treatedButtonClick();
}

// Calculates the total score
function calculateTotalScore(){

    score = 0;

    score += calculateAgeScore();
    score += calculateBPScore();
    score += calculateCholesterol();
    score += calculateSmokerScore();
    score += calculateHDLScore();
    riskPercent = calculateRisk();
}

// return the total 
function calculateRisk(){
    let i = 0;

    if (male == true){
        while (i < maleTotalRanges.length - 1){
            if (score < maleTotalRanges[i + 1] && score >= maleTotalRanges[i]){
                break;
            }
            i++;
        }
        return tenYearRiskMale[i];
    }
    while (i < FemaleTotalRanges.length - 1){
        if (score < FemaleTotalRanges[i + 1] && score >= FemaleTotalRanges[i]){
            break;
        }
        i++;
    }
    return tenYearRiskFemale[i];

}

// Return score based on gender, blood-pressure, and treated status
function calculateBPScore(){

    if (male == true){
        if (BPtreated == true){
            return maleTBPscores[bloodPressureIndex];
        }
        return maleUTBPscores[bloodPressureIndex];
    }
    if (BPtreated == true){
        return femaleTBPscores[bloodPressureIndex];
    }
    return femaleUTBPscores[bloodPressureIndex];
}

// Return the score based on HDL cholesterol
function calculateHDLScore(){

    return HDLscores[HDLCholesterolIndex];
}

// Return score based on age and gender
function calculateAgeScore(){
    
    let i = 0;

    while(i < ageRanges.length - 1){
        if (age < ageRanges[i + 1] && age >= ageRanges[i]){
            break;
        }
        i++;
    }

    if (male == true){
        return maleAgeScores[i];
    }
    return femaleAgeScores[i];
}

// return score based on age, gender, and smoking status
function calculateSmokerScore(){
    
    // Return zero if subject doesn't smoke
    if (smoker == false){
        return 0;
    }
    
    // Find the appropriate age range for table lookup.
    let i = 0;
    while(i < cholSmokAgeRanges.length - 1){
        if (age < cholSmokAgeRanges[i + 1] && age >= cholSmokAgeRanges[i]){
            break;
        }
        i++;
    }

    // return the male or female score
    if (male == true){
        return maleSmokerScores[i];
    }
    return femaleSmokerScores[i];
}

// return score based on age, gender, and cholesterol
function calculateCholesterol(){

    let i = 0;

    // find the appropriate age index for lookup
    while(i < cholSmokAgeRanges.length - 1){
        if (age < cholSmokAgeRanges[i + 1] && age >= cholSmokAgeRanges[i] ){
            break;
        }
        i++;
    }

    // return the male or female score
    if (male == true){
        return maleCholesterolScore[i][cholesterolIndex];
    }
    return femaleCholesterolScores[i][cholesterolIndex];
}