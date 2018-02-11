var moment = require('moment');
module.exports = function(app){
	
app.get('/',function(req,res){
    
var offers = [
  { iconclass: 'ion-ios-lightbulb-outline', mediah4:'Well documented.', media:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.',delay:'300ms' },
  { iconclass: 'ion-ios-flask-outline', mediah4:'Media heading', media:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.',delay:'600ms' },
  { iconclass: 'ion-ios-lightbulb-outline', mediah4:'Well documented.', media:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.',delay:'900ms' },
  { iconclass: 'ion-ios-americanfootball-outline', mediah4:'Free updates', media:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.',delay:'1200ms' },
  { iconclass: 'ion-ios-keypad-outline', mediah4:'Solid Support', media:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.',delay:'1500ms' },
  { iconclass: 'ion-ios-barcode-outline', mediah4:'Simple Installation', media:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, sint.',delay:'1800ms' },

];

var works = [
{data:'0ms', img: 'item-1.jpg', fimage: 'item-1.jpg', dlink:'#',title:'Dew Drop',exp:'Redesigne UI Concept'},
{data:'300ms', img: 'item-2.jpg', fimage: 'item-2.jpg', dlink:'#',title:'Bottle Mockup',exp:'Lorem ipsum dolor sit.'},
{data:'300ms', img: 'item-3.jpg', fimage: 'item-3.jpg', dlink:'#',title:'Table Design',exp:'Lorem ipsum dolor sit amet.'},
{data:'600ms', img: 'item-4.jpg', fimage: 'item-4.jpg', dlink:'#',title:'Make Up elements',exp:'Lorem ipsum dolor.'},
{data:'900ms', img: 'item-5.jpg', fimage: 'item-5.jpg', dlink:'#',title:'Shoping Bag Concept',exp:'Lorem ipsum dolor.'},
{data:'1200ms', img: 'item-6.jpg', fimage: 'item-6.jpg', dlink:'#',title:'Caramel Bottle',exp:'Lorem ipsum dolor.'}

];
   res.render('pages/index',{
  		
  		offers: offers,
      works: works

   });
});
app.get('/about',function(req,res){
	res.render('pages/about');
});
app.get('/service',function(req,res){
	res.render('pages/service');
});
app.get('/gallery',function(req,res){
	res.render('pages/gallery');
});

app.get('/blogs',function(req,res){
  res.render('pages/blogs',{
    moment: moment
  });
});
app.get('/contact',function(req,res){
	res.render('pages/contact');
});
app.get('/test',function(req,res){
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];

	res.render('pages/test',{
		 drinks: drinks
	});
});

app.get('/*',function(req,res){
	res.render('pages/404');
});

};

