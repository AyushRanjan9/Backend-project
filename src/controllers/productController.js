const pool = require('./db.js');

exports.getAllProducts = (req, res) => {
  pool.query('SELECT * FROM products', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;
  pool.query('SELECT * FROM products WHERE id = ?', productId, (error, results) => {
    if (error) throw error;
    res.json(results[0]);
  });
};

exports.createProduct = (req, res) => {
  const { name, price , description} = req.body;
  pool.query('INSERT INTO products (name, price , description) VALUES (?, ?,?)', [name, price, description], (error, results) => {
    if (error) throw error;
    res.json({ message: 'Product created successfully', id: results.insertId });
  });
};

exports.updateProduct = async(req, res) => {
  const productId = req.params.id;
  const { name, price  , description} = req.body;

  console.log(price)
  
    if (description !== undefined) {
      await pool.query('UPDATE products SET description = ? WHERE id = ?', [description, productId]);
    }

    if (name !== undefined) {
      await pool.query('UPDATE products SET name = ? WHERE id = ?', [name, productId]);
    }
    if (price !== undefined && Number.isInteger(price)) {
      // Assuming price is a valid number, you might want to validate it further
      await pool.query('UPDATE products SET price = ? WHERE id = ?', [price, productId]);
    }

    res.json({ message: 'Product updated successfully', id: productId });
  
  // if (typeof price === 'number' && !isNaN(price)){
  //   pool.query('UPDATE products SET  price = ? WHERE id = ?', [ price, productId], (error) => {
  //     if (error) throw error;
  //     res.json({ message: 'Product updated successfully', id: productId });
  //   });
  // }
  // if (!description || description.trim() === ''){
  //   pool.query('UPDATE products SET  description = ? WHERE id = ?', [description, productId], (error) => {
  //     if (error) throw error;
  //     res.json({ message: 'Product updated successfully', id: productId });
  //   });
  // }
  
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;
  pool.query('DELETE FROM products WHERE id = ?', productId, (error) => {
    if (error) throw error;
    res.json({ message: 'Product deleted successfully', id: productId });
  });
};
