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
let CollectionOfNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, skinTone, accessory, rarity) {
   const NFT = {
      name: name,
      skinTone: skinTone,
      accessory: accessory,
      rarity: rarity
   };

   CollectionOfNFTs.push(NFT);
   console.log("Minted - " + name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   let i = 0;
   for(i = 0; i < CollectionOfNFTs.length; i++ ){
      console.log("\nNFTs: " + (i + 1));
      console.log("name: " + CollectionOfNFTs[i].name);
      console.log("skinTone: " + CollectionOfNFTs[i].skinTone);
      console.log("acessory: " + CollectionOfNFTs[i].accessory);
      console.log("rarity: " + CollectionOfNFTs[i].rarity);
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   return CollectionOfNFTs.length;
}

// call your functions below this line
mintNFT("Joy", "medium", "Hat", "Rare");
mintNFT("Rachel", "Light", "Glasses", "Epic");
mintNFT("Ross", "Dark", "Chain", "Common");
mintNFT("Monica", "medium", "Watch", "Rare");

listNFTs();

console.log("\nTotal supply: " + getTotalSupply());
