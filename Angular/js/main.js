var app=angular.module("myApp",[])
    .controller("myCtrl",function(){
        this.classes=[{
            bdstyle:"body--1",
            header:"header--1",
            aside:"aside--1",
            section:"section--1",
            footer:"footer--1"
        },{
            bdstyle:"body--2",
            header:"header--2",
            aside:"aside--2",
            section:"section--2",
            footer:"footer--2"
        },{
            bdstyle:"body--3",
            header:"header--3",
            aside:"aside--3",
            section:"section--3",
            footer:"footer--3"
        }]
        this.useStyle=this.classes[0];
        this.setStyle1=function(){
            this.useStyle=this.classes[0];
        }
        this.setStyle2=function(){
            this.useStyle=this.classes[1];
        }
        this.setStyle3=function(){
            this.useStyle=this.classes[2];
        }
    })