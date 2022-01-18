function newImage(url, left, bottom){  //  this does the create img html tag and the framework for the style.
let asset = document.createElement('img')
asset.src = url
asset.style.position = 'fixed'
asset.style.left = left+'px'
asset.style.bottom = bottom+'px'
document.body.append(asset)
return asset // for some reason I need this to make it work, but I have no idea why.
}


// interactive item function. uses newImage function for generation
function newItem(url,left,bottom,){
    let asset = newImage(url,left,bottom)
    asset.addEventListener('dblclick',function(){
        asset.remove()
    })
    return asset // this does not seem to change anything but I think it will be used latter on for item interactions
}



newImage('assets/green-character.gif',100,100)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350, 100)
newImage('assets/crate.png',150, 200)
newImage('assets/well.png',500, 425)


newItem('assets/sword.png',500,405)
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)


// i kant figure out how to make the sky and grass into bigger peices with functions.
// test area//

// tiles(skyblock and grassblock) stretch or repeat(how)?
//

// define sky
// all of screen size z index -2
//

//define grass
// half of screen size zindex -1
//
// USE A for LOOP TO MAKE A BUNCH OF DIVS TO MAEK THE SKY BLOCKS REPEAT LOL WHAT KIND OF HACK WAY OF 
// DOING THIS I DONT UNDERSTAND WHY ARE WE DOING IT THIS WAY PLS I HAVE BEEN STARRING AT THIS FOR DAYS TRYING TO UNDERSTAND THIS INANITY
//newImage('assets/grass.png',100,100)
function block(url,left,bottom,width,height){
for (i=0;i<10; i++) {
    let url
    let asset = newImage(url,left,bottom)
}
}

block('assets/sky.png',100,200)