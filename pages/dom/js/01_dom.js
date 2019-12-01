var list = [
    {    
     author: "LED ZEPPELIN",    
     song:"STAIRWAY TO HEAVEN"
    },
    
    {    
     author: "QUEEN",    
     song:"BOHEMIAN RHAPSODY"    
    },
    
    {   
     author: "LYNYRD SKYNYRD",    
     song:"FREE BIRD"    
    },
    
    {    
     author: "DEEP PURPLE",    
     song:"SMOKE ON THE WATER"    
    },
    
    {    
     author: "JIMI HENDRIX",   
     song:"ALL ALONG THE WATCHTOWER"    
    },
    
    {    
     author: "AC/DC",    
     song:"BACK IN BLACK"    
    },
    
    {    
     author: "QUEEN",    
     song:"WE WILL ROCK YOU"    
    },
    
    {    
     author: "METALLICA",    
     song:"ENTER SANDMAN"    
    }
    
    ];
function playList() {    
    let ul = document.createElement ('ul');
    
    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const li = document.createElement ('li');
        li.innerText = `${element.author} - ${element.song};`;
        ul.appendChild (li);    
    }
    document.body.appendChild (ul);
}