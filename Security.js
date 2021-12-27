class Security {
    

    constructor(){

        this.access1 = createInput("Code1");
        this.access1.position(displayWidth/3-100,displayHeight/2+20);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(displayWidth/3-100,displayHeight/2+50);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
        this.access2.position(displayWidth/2+340, displayHeight/2.2+70);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(displayWidth/2+340, displayHeight/2.2+100);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code1")
        this.access3.position(displayWidth/2+80, displayHeight/2+80);
        this.access3.style('background', 'white');  

         this.button3 = createButton('Check');
         this.button3.position(displayWidth/2+80, displayHeight/2+110);
         this.button3.style('background', 'lightgrey');
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
    }
}  