
// Lookup table for both smoking and cholesterol age ranges
const cholSmokAgeRanges = new Array(20, 40, 50, 60, 70);

// Lookup tables for Cholesterol
const cholesterolRanges = new Array(0, 160, 200, 240, 280);
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
const HDLranges = [0, 40, 50, 60];
const HDLscores = [2, 1, 0, -1];

let male = true;
let smoker = false;
let cholesterol = 290;
let HDLcholesterol = 0;
let BloodPressure = 0;
let age = 25;
let score = 0;

function calculateHDLScore(){
    let i = 0;

    while(i < HDLranges.length - 1){
        if (HDLcholesterol >= HDLranges[i] && HDLcholesterol < HDLranges[i + 1]){
            break;
        }
        i++;
    }

    return HDLscores[i];
}

function calculateAgeScore(){
    
    let i = 0;

    while(i < ageRanges.length - 1){
        if (age >= ageRanges[i] && age < ageRanges[i + 1]){
            break;
        }
        i++;
    }

    if (male == true){
        return maleAgeScores[i];
    }
    return femaleAgeScores[i];
}

function calculateSmokerScore(){
    
    // Return zero if subject doesn't smoke
    if (smoker == false){
        return 0;
    }
    
    // Find the appropriate age range for table lookup.
    let i = 0;
    while(i < cholSmokAgeRanges.length - 1){
        if (age >= cholSmokAgeRanges[i] && age < cholSmokAgeRanges[i + 1]){
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

function calculateCholesterol(){

    let i = 0;
    let j = 0;

    // find the appropriate age index for lookup
    while(i < cholSmokAgeRanges.length - 1){
        if (age >= cholSmokAgeRanges[i] && age < cholSmokAgeRanges[i + 1]){
            break;
        }
        i++;
    }

    // find the appropriate cholesterol index for lookup
    while(j < cholesterolRanges.length - 1){
        if (cholesterol >= cholesterolRanges[j] && cholesterol < cholesterolRanges[j + 1]){
            break;
        }
        j++;
    }

    // return the male or female score
    if (male == true){
        return maleCholesterolScore[i][j];
    }
    return femaleCholesterolScores[i][j];
}

