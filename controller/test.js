const mongoose = require('mongoose');

// Define the schema for your collection
const OrderModel = require('../model/orderModels')

// Specify the new document you want to replace with
const replacementDocument = { "orderId":1};

// Specify the document ID you want to replace
const documentId = '6464f4e733fed7b63a052054';

// Use findByIdAndUpdate to replace the document
OrderModel.findByIdAndUpdate(documentId, replacementDocument, { new: true })
  .then(updatedDocument => {
    console.log('Document replaced successfully:', updatedDocument);
  })
  .catch(error => {
    console.error(error);
  });
