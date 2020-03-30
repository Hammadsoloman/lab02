'use strict';

$(document).ready(function () {
    function Zoo(ZooObj) {
        this.image_url = ZooObj.image_url;
        this.title = ZooObj.title;
        this.description = ZooObj.description;
        this.keyword = ZooObj.keyword;
        this.horns = ZooObj.horns;
        Zoo.all.push(this);
    }
     Zoo.all = [];
     console.log(Zoo.all);
     
    Zoo.prototype.render = function () {
        let $callAnimal = $('#photo-template').clone();
        $callAnimal.find('h2').text(this.title);
        $callAnimal.find('img').attr('src', this.image_url);
        $callAnimal.find('p').text(this.description);
        $callAnimal.removeAttr('id');
        $callAnimal.attr('id', this.title);
        $('main').append($callAnimal);
     
    }

    Zoo.prototype.renderList = function () {
      let $animalOption = $('<option></option>').text(this.title);
      $animalOption.attr('value',this.keyword)
      $('select').append($animalOption);   
  }
    
    const readJson = () => {
        $.ajax('data/page-1.json', { method: 'GET', dataType: 'JSON' }).then(data => {
            data.forEach(animal => {
                let ZooObj = new Zoo(animal);
                ZooObj.render();
                ZooObj.renderList();
            });
        });
    };
    readJson();
});