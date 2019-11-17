var Tamagochi = {
    Name : "Kotenok",
    hunger : 100,
    fatigue : 100,
    IsLife : true,
    purity : 100,
    happiness : 100,
    Info : function () {

        document.getElementById("name").innerHTML = this.Name;
        document.getElementById("hunger").innerHTML = this.hunger;
        document.getElementById("fatigue").innerHTML = this.fatigue;
        document.getElementById("happiness").innerHTML = this.happiness;
        document.getElementById("purity").innerHTML = this.purity;
      },
    Rename : function (){
        this.name  = prompt ("Введите имя питомца","Kotenok");  
    },
    ValueCheckHundred: function()
    {
        if (this.hunger<0) this.hunger=0;
        if (this.hunger>101) this.hunger=100;
        if (this.fatigue<0) this.fatigue=0;
        if (this.fatigue>101) this.fatigue=100;
        if (this.purity<0) this.purity=0;
        if (this.purity>101) this.purity=100;
        if (this.happiness<0) this.happiness=0;
        if (this.happiness>101) this.happiness=100;
    },
    Check : function ()
    {
        if (this.hunger <= 0) {
                this.IsLife = false;
                alert("Your pet DEAT");
            }
        else
        {
             if (this.hunger < 20) alert("Your pet HUNGER");
    
             if (this.fatigue <= 0) {
                alert("Your pet VERY TIRED");
                this.hunger = this.hunger - 100;
                this.happiness = this.happiness - 100;
            }
            else if (this.fatigue < 20) alert("Your pet TIRED");
           
             if (this.purity <= 0) {
                alert("Your pet VERY DIRTY");
                this.happiness = this.happiness - 100;
            }
            else  if (this.purity <= 20 ) alert("Your pet DIRTY");
            
             if (this.happiness <= 0) {
                alert("Your pet VERY NOT HAPPY");
                this.hunger = this.hunger - 100;
                this.fatigue = this.fatigue - 100;
            }
            else if (this.happiness < 20) alert("Your pet NOT HAPPY");
        }
            this.ValueCheckHundred();
            this.Info();
    },
    Walk : function () {
        if (this.IsLife) {
            this.fatigue = this.fatigue - 10;
            this.happiness = this.happiness + 20;
            this.purity = this.purity -30;
            this.hunger = this.hunger -20;
            this.Check();
        }
        else alert("Your pet DEAD");
    },
    eat : function () {
        if (this.IsLife) {
            this.hunger = this.hunger +50;
            this.happiness = this.happiness + 20;
            this.purity=this.purity-10;
            this.Check();
        }
        else alert("Your pet DEAD");
    },
    sleep : function () {
        if (this.IsLife) {
            this.hunger = this.hunger -20;
            this.happiness = this.happiness + 20;
            this.purity=this.purity-10;
            this.fatigue=this.fatigue+50;
            this.Check();
        }
        else alert("Your pet DEAD");
    },
    wash : function (){
        if (this.IsLife) {
            this.purity = this.purity +50;
            this.happiness = this.happiness - 20;
            this.Check();
        }
        else alert("Your pet DEAD");
    },

}
Tamagochi.Rename();