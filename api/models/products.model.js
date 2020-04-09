const pool = require("../db/db.js");

exports.create = async function(data){
  let response;
  try {
    response = await pool.query(`INSERT INTO public.products (product_name, product_price) VALUES ('${data.name}', '${data.price}')`);
  } catch (error) {
    return {ok:false , data:response};
  }
  return {ok:true , data:response};
}

exports.getAll = async function(){
  let response;
  try {
    response = await pool.query(`SELECT * FROM public.products order by id DESC`);
  } catch (error) {
    return {ok:false , data:response};
  }
  return {ok:true , data:response};
}

exports.searchByName = async function(name){
  let response;
  try {
    response = await pool.query(`SELECT * FROM public.products WHERE product_Name='${name}'`);
  } catch (error) {
    return {ok:false , data:response};
  }
  return {ok:true , data:response};
}

exports.findOne = async function(id){
  let response;
  try {
    response = await pool.query(`SELECT * FROM public.products WHERE id='${id}'`);
  } catch (error) {
    return {ok:false , data:response};
  }
  return {ok:true , data:response};
}

exports.delete = async function(id){
  let response;
  try {
    response = await pool.query(`DELETE FROM public.products WHERE id='${id}'`);
  } catch (error) {
    return {ok:false , data:response};
  }
  return {ok:true , data:response};
}

exports.update = async function(id,name,price){
  let response;
  try {
    response = await pool.query(`UPDATE public.products SET product_name='${name}',product_price ='${price}' WHERE id='${id}'`);
  } catch (error) {
    return {ok:false , data:response};
  }
  return {ok:true , data:response};
}