/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(Realname,alias,nation,console,weap){
    const NFT = {
        "Realname":Realname,
        "alias":alias,
        "nation":nation,
        "console":console,
        "weap":weap,
         }
         NFTs.push(NFT);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("Realname: " + NFTs[i].Realname);
        console.log("Alias: " + NFTs[i].alias);
        console.log("Nation: " + NFTs[i].nation);
        console.log("Console: " + NFTs[i].console);
        console.log("Weapon: " + NFTs[i].weap);
        console.log("--------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\n\n\n\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Neptune", "Purple Heart", "Planeptune", "Sega", "Sword");
mintNFT("Noire", "Black Heart", "Lastation", "Playsation", "Rapier");
mintNFT("Blanc", "White Heart", "Lowee", "Nintendo", "Hammer");
mintNFT("Vert", "Green Heart", "Leanbox", "Xbox", "Lance");

listNFTs();
getTotalSupply();
