"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = () => __awaiter(void 0, void 0, void 0, function* () {
    const fs = require("fs");
    //get and format user's decklist
    var userDeckListName = fs.readdirSync('./Decklist', 'utf8');
    var userDeckList = fs.readFileSync(`./Decklist/${userDeckListName[0]}`, 'utf8');
    var cleanDeckList = [''];
    let cardList = userDeckList.split(`1`);
    let cleanCardList = [''];
    for (let card of cardList) {
        let x = card.slice(1, -1);
        if (x != '') {
            if (x != ',') {
                cleanCardList.push(x);
            }
        }
        else { }
    }
    //get and format the Categories
    let oneCategory = fs.readFileSync(`./PointsList/1.txt`, 'utf8').split('1');
    let cleanOneCategory = [];
    let twoCategory = fs.readFileSync(`./PointsList/2.txt`, 'utf8').split('1');
    let cleanTwoCategory = [];
    let threeCategory = fs.readFileSync(`./PointsList/3.txt`, 'utf8').split('1');
    let cleanThreeCategory = [];
    let fourCategory = fs.readFileSync(`./PointsList/4.txt`, 'utf8').split('1');
    let cleanFourCategory = [];
    let fiveCategory = fs.readFileSync(`./PointsList/5.txt`, 'utf8').split('1');
    let cleanFiveCategory = [];
    let sixCategory = fs.readFileSync(`./PointsList/6.txt`, 'utf8').split('1');
    let cleanSixCategory = [];
    let sevenCategory = fs.readFileSync(`./PointsList/7.txt`, 'utf8').split('1');
    let cleanSevenCategory = [];
    let eightCategory = fs.readFileSync(`./PointsList/8.txt`, 'utf8').split('1');
    let cleanEightCategory = [];
    let nineCategory = fs.readFileSync(`./PointsList/9.txt`, 'utf8').split('1');
    let cleanNineCategory = [];
    let tenCategory = fs.readFileSync(`./PointsList/10.txt`, 'utf8').split('1');
    let cleanTenCategory = [];
    let bannedCategory = fs.readFileSync(`./PointsList/Banned.txt`, 'utf8').split('1');
    let cleanBannedCategory = [];
    for (let card of oneCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanOneCategory.push(x);
            }
        }
        else { }
    }
    for (let card of twoCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanTwoCategory.push(x);
            }
        }
        else { }
    }
    for (let card of threeCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanThreeCategory.push(x);
            }
        }
        else { }
    }
    for (let card of fourCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanFourCategory.push(x);
            }
        }
        else { }
    }
    for (let card of fiveCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanFiveCategory.push(x);
            }
        }
        else { }
    }
    for (let card of sixCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanSixCategory.push(x);
            }
        }
        else { }
    }
    for (let card of sevenCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanSevenCategory.push(x);
            }
        }
        else { }
    }
    for (let card of eightCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanEightCategory.push(x);
            }
        }
        else { }
    }
    for (let card of nineCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanNineCategory.push(x);
            }
        }
        else { }
    }
    for (let card of tenCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanTenCategory.push(x);
            }
        }
        else { }
    }
    for (let card of bannedCategory) {
        let x = card.slice(1, -2);
        if (x != '') {
            if (x != ',') {
                cleanBannedCategory.push(x);
            }
        }
        else { }
    }
    //Log and Count 1's
    let oneCategoryTotal = 0;
    let oneCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let oneCategoryCard of cleanOneCategory) {
            if (userCard == oneCategoryCard) {
                oneCategoryTotal++;
                oneCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 1's: ${oneCategoryTotal}`);
    console.log(`List of 1's in Deck:\n ${oneCategoryUserCards}`);
    //Log and Count 2's
    let twoCategoryTotal = 0;
    let twoCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let twoCategoryCard of cleanTwoCategory) {
            if (userCard == twoCategoryCard) {
                twoCategoryTotal = twoCategoryTotal + 2;
                twoCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 2's: ${twoCategoryTotal}`);
    console.log(`List of 2's in Deck:\n ${twoCategoryUserCards}`);
    //Log and Count 3's
    let threeCategoryTotal = 0;
    let threeCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let threeCategoryCard of cleanThreeCategory) {
            if (userCard == threeCategoryCard) {
                threeCategoryTotal = threeCategoryTotal + 3;
                threeCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 3's: ${threeCategoryTotal}`);
    console.log(`List of 3's in Deck:\n ${threeCategoryUserCards}`);
    //Log and Count 4's
    let fourCategoryTotal = 0;
    let fourCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let fourCategoryCard of cleanFourCategory) {
            if (userCard == fourCategoryCard) {
                fourCategoryTotal = fourCategoryTotal + 4;
                fourCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 4's: ${fourCategoryTotal}`);
    console.log(`List of 4's in Deck:\n ${fourCategoryUserCards}`);
    //Log and Count 5's
    let fiveCategoryTotal = 0;
    let fiveCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let fiveCategoryCard of cleanFiveCategory) {
            if (userCard == fiveCategoryCard) {
                fiveCategoryTotal = fiveCategoryTotal + 5;
                fiveCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 5's: ${fiveCategoryTotal}`);
    console.log(`List of 5's in Deck:\n ${fiveCategoryUserCards}`);
    //Log and Count 6's
    let sixCategoryTotal = 0;
    let sixCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let sixCategoryCard of cleanSixCategory) {
            if (userCard == sixCategoryCard) {
                sixCategoryTotal = sixCategoryTotal + 6;
                sixCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 6's: ${sixCategoryTotal}`);
    console.log(`List of 6's in Deck:\n ${sixCategoryUserCards}`);
    //Log and Count 7's
    let sevenCategoryTotal = 0;
    let sevenCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let sevenCategoryCard of cleanSevenCategory) {
            if (userCard == sevenCategoryCard) {
                sevenCategoryTotal = sevenCategoryTotal + 7;
                sevenCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 7's: ${sevenCategoryTotal}`);
    console.log(`List of 7's in Deck:\n ${sevenCategoryUserCards}`);
    //Log and Count 8's
    let eightCategoryTotal = 0;
    let eightCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let eightCategoryCard of cleanEightCategory) {
            if (userCard == eightCategoryCard) {
                eightCategoryTotal = eightCategoryTotal + 8;
                eightCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 8's: ${eightCategoryTotal}`);
    console.log(`List of 8's in Deck:\n ${eightCategoryUserCards}`);
    //Log and Count 9's
    let nineCategoryTotal = 0;
    let nineCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let nineCategoryCard of cleanNineCategory) {
            if (userCard == nineCategoryCard) {
                nineCategoryTotal = nineCategoryTotal + 9;
                nineCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 9's: ${nineCategoryTotal}`);
    console.log(`List of 9's in Deck:\n ${nineCategoryUserCards}`);
    //Log and Count 10's
    let tenCategoryTotal = 0;
    let tenCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let tenCategoryCard of cleanTenCategory) {
            if (userCard == tenCategoryCard) {
                tenCategoryTotal = tenCategoryTotal + 10;
                tenCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total 10's: ${tenCategoryTotal}`);
    console.log(`List of 10's in Deck:\n ${tenCategoryUserCards}`);
    //Log and Count 10's
    let bannedCategoryTotal = 0;
    let bannedCategoryUserCards = [];
    for (let userCard of cleanCardList) {
        for (let bannedCategoryCard of cleanBannedCategory) {
            if (userCard == bannedCategoryCard) {
                bannedCategoryTotal++;
                bannedCategoryUserCards.push(userCard);
            }
            else { }
        }
    }
    console.log(`Total BANNED CARDS: ${bannedCategoryTotal}`);
    console.log(`List of BANNED CARDS in Deck:\n ${bannedCategoryUserCards}`);
    console.log(`TOTAL COMMANDER POINTS: ${oneCategoryTotal +
        twoCategoryTotal +
        threeCategoryTotal +
        fourCategoryTotal +
        fiveCategoryTotal +
        sixCategoryTotal +
        sevenCategoryTotal +
        eightCategoryTotal +
        nineCategoryTotal +
        tenCategoryTotal}`);
    if (bannedCategoryTotal < 1) {
        console.log("Your deck is legal");
    }
    if (bannedCategoryTotal > 0) {
        console.log("Your deck is NOT LEGAL and contains BANNED cards!");
    }
});
