const Common = function(){
    this.auth = false;

    this.registr = function(){

    };
    this.login = function(){

    };
    this.logout = function(){

    };

};

const Admin = function(){
    Common.apply(this);

   this.role ='Admin'; 
   this.changeRole = function(name){

    if(this.role !='Admin'){

        this.role = name;
       
        const admin = new Admin();
        const currentKeys = Object.keys(this);

        for( const key in admin){
            if(currentKeys.indexOf(key)== -1){
                this[key] = admin[key];
            }
        }
    }

  };
};

const User = function(){
    Common.apply(this);

    this.role ='User'; 
};

let alex =new User();
let bob =new User();
let mike =new Admin();

console.log(alex);
console.log(bob);
console.log(mike);

mike.changeRole.bind(alex)('Admin');
console.log(alex);