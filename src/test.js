function test(color,index){
    const colors = ["red","yellow","blue","green"];
    const updatedColor = [...colors.slice(0,index),color,...colors.slice(index+1)];
    console.log(updatedColor);
}

test("gray",3);
