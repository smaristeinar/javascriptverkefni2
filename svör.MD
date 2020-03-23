#1 
Element geta ekki verið með sama id og því er léttar og fljótar að fynnna rétta elementið.

#2
Ef nodelistinn er static þá er ekki hægt að breyta elementum á síðuni dynamicly heldur þarf að refresha síðuna og gera það staticly.

#3
false skilgreinir capture event þar sem eventið byrjar á evsta leayer og vinnur sig niður true skilgreinir bubling og eventið vinnur sig upp frá insta layerinu

#4let Person = {   
  name: 'Sam',   
  sayName: function(){     
     console.log('My name is '+ this.name);   
  }
 };
buttonEl.addEventListener('click', Person.sayName.bind(Person));