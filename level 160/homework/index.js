db.collection.deleteOne({ id: 1 });
db.collection.deleteOne({ price: { $gt: 400 } });
db.collection.deleteOne({ in_stock: false });
db.collection.deleteOne({ rating: null });
db.collection.deleteOne({ tags: "electronics" });

db.collection.deleteMany({ price: { $lt: 50 } });
db.collection.deleteMany({ in_stock: false });
db.collection.deleteMany({ rating: { $exists: false } });
db.collection.deleteMany({ price: { $gt: 300 }, in_stock: false });
db.collection.deleteMany({ tags: { $size: 0 } });

db.collection.replaceOne(
    { id: 2 },
    { id: 2, name: "New Product", price: 150 }
);

db.collection.replaceOne(
    { price: { $gt: 300 } },
    { name: "Simplified Product", price: 300 }
);

db.collection.replaceOne(
    { id: 10 },
    {
        id: 10,
        name: "Advanced Product",
        price: 500,
        details: { manufacturer: "Company A", warranty: "2 years" }
    }
);

const doc = db.collection.findOne({ id: 3 });
db.collection.replaceOne(
    { id: 3 },
    { id: doc.id, name: doc.name, price: doc.price, updated: true }
);

db.collection.replaceOne(
    { id: 999 },
    { id: 999, name: "Nonexistent", price: 0 }
);