calculateDays("" , "2023/12/24");

function calculateDays(start , end) {
    const monthArr = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
    const maxDayMonth = [31, 28, 31, 30, 31, 30, 31 , 31 , 30 , 31 , 30 , 31]
    
    start = new Date();
    let startDate = start.getDate();
    

    end = new Date(end);
    let endDate = end.getDate();

    //using switch cases for if else computation , this is static for present month
    let startDayMax; 
    switch (start.getMonth()){
        case 0:
            startDayMax = 31; // jan
            break;
        case 1:
            startDayMax = 28; //feb
            break;    
        case 2:
            startDayMax = 31; //mar
            break;
        case 3:
            startDayMax = 30 //apr
            break;
        case 4:
            startDayMax = 31; //may
            break;
        case 5:
            startDayMax = 30; //jun
            break;
        case 6:            
            startDayMax = 31; //jul
            break;
        case 7:
            startDayMax = 31; //aug
            break;
        case 8:
            startDayMax =30; //sept
            break;
        case 9:
            startDayMax = 31; //oct
            break;
        case 10:
            startDayMax = 30; //nov
            break;
        case 11:
            endDayMax = 31; //dec
            break;                                       
    }   

    //using switch cases for if else computation , this is Dynamic for end month
    let endDayMax;
    switch (end.getMonth()){
        case 0:
            endDayMax = 31; // jan
            break;
        case 1:
            endDayMax = 28; //feb
            break;    
        case 2:
            endDayMax = 31; //mar
        
            break;
        case 3:
            endDayMax = 30 //apr
            break;
        case 4:
            endDayMax = 31; //may
            break;
        case 5:
            endDayMax = 30; //jun
            break;
        case 6:            
            endDayMax = 31; //jul
            break;
        case 7:
            endDayMax = 31; //aug
            break;
        case 8:
            endDayMax =30; //sept
            break;
        case 9:
            endDayMax = 31; //oct
            break;
        case 10:
            endDayMax = 30; //nov
            break;
        case 11:
            endDayMax = 31; //dec
            break;                                       
    }   
    

    let dateFormatt_1 = (monthArr[end.getMonth()]).toString().concat(" ", endDate); //Display array string on numerical month
    let computeDays;
    let arraySlice;
    if (end.getMonth() == start.getMonth()) {   // calculation for same month
        computeDays = (startDayMax - startDate);
        console.log(`The day(s) left before ${dateFormatt_1} is: ${computeDays} day(s)`);
        }
        
        // 1 month ahead
    if (end.getMonth() > start.getMonth()) { //if ending month is greater than starting month perform the action(s) below:

          //forumula:  max day of present month(Switch Case) - current date + month total date(via Array) + end date 
            // ex: January 31 - January 25 = 6 + 1 month of February (28 days) + March 10 
            // mathematical example: (31 - 5) + 28 + 10 = 44 days

        if (end.getMonth() == 1) { // if ending is feb           
        computeDays = (startDayMax - startDate) + endDate;
        console.log(`The day(s) left before ${dateFormatt_1} is: ${computeDays} day(s)`);
        }
        else if (end.getMonth() == 2) { // if ending is mar       
            arraySlice = maxDayMonth.slice(1,2)
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
            // mathematical example: (31 - 5) + 28 + 10 = 44 days
        }
        else if (end.getMonth() == 3) { // if ending is april         
            arraySlice = maxDayMonth.slice(1,3); //maxDayMonth[1] + maxDayMonth[2];
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 4) { // if ending is may         
            arraySlice = maxDayMonth.slice(1,4);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 5) { // if ending is june         
            arraySlice = maxDayMonth.slice(1,5);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 6) { // if ending is july        
            arraySlice = maxDayMonth.slice(1,6);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 7) { // if ending is Aug         
            arraySlice = maxDayMonth.slice(1,7);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 8) { // if ending is sept         
            arraySlice = maxDayMonth.slice(1,8);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 9) { // if ending is oct         
            arraySlice = maxDayMonth.slice(1,9);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }
        else if (end.getMonth() == 10) { // if ending is nov         
            arraySlice = maxDayMonth.slice(1,10);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
        }   
        else if (end.getMonth() == 11) { // if ending is Dec         
            arraySlice = maxDayMonth.slice(1,11);
            dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1);
             // mathematical example: (31 - 5) + feb~Nov(no. of days) + 24 (december) = 333 days
        }
    } // nested if else ending bracket
} //calculateDays function ending bracket

function dateForumla(arraySlice , computeDays, startDayMax , startDate , endDate , dateFormatt_1){
    computeDays = ((startDayMax - startDate) + arraySlice.reduce(daySummation) + endDate);      
    console.log(`The day(s) left before ${dateFormatt_1} is: ${computeDays} day(s)`);
}

function daySummation(total , element , index , array) { // summing all element on Array , callabck on dateFormula function 
    return total + element;
}

// used slice + reduce to avoid calling individual array
// else if (end.getMonth() == 11) { // if ending is Dec         
// arraySum = maxDayMonth[1] + maxDayMonth[2] + maxDayMonth[3] + maxDayMonth[4] + maxDayMonth[5] + maxDayMonth[6] + maxDayMonth[7] + maxDayMonth[8] + maxDayMonth[9] + maxDayMonth[10];
// dateForumla(arraySum , computeDays, startDayMax , startDate , arraySum , endDate , dateFormatt_1);
