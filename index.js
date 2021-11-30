products.map(productCategory);

function productCategory(productCat){

const categoryList = document.getElementById('pCategory');
var div1 = document.createElement("div");
categoryList.appendChild(div1);

var att = document.createAttribute("class");
att.value = "col-4";
div1.setAttributeNode(att);

var div2 = document.createElement("div");
div1.appendChild(div2);
att = document.createAttribute("class");
att.value = "category-name pcatstyle";
div2.setAttributeNode(att);

div2.innerHTML = productCat.name;

var ap = productCat.allProducts;
console.log(ap);

ap.map(function(uniqueProduct){
    console.log(uniqueProduct.id);
});

}
