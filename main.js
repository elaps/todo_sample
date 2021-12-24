function initVue(){
    return{
        items:[
            {id:1,title:'Task1',message:'Text1'},
            {id:2,title:'Task2',message:'Text2'},
            {id:3,title:'Task3',message:'Text3'},

        ],
        showModal:false,
        current:{id:null},
        setCurrent(id){
            this.current = this.items.find(i=>i.id==id)
        },
        login(){
            this.showModal=false
        }
    }
}