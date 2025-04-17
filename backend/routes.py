from app import app
from flask import request, jsonify
from models import create_user, get_user_by_email, create_product, get_all_products, create_bill, create_bill_item


# User Signup
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')


     #Create user
    create_user(name, email,password)
    #print(name, email)
    return jsonify({'message': 'User created successfully'}), 201

# User Login
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = get_user_by_email(email)

   #urn jsonify({'message': 'Invalid credentials'}), 401

# Add Product
@app.route('/products', methods=['POST'])
def add_product():
    data = request.get_json()
    name = data.get('name')
    price = data.get('price')
    stock = data.get('stock')
    category_id = data.get('category_id')

    create_product(name, price, stock, category_id)
    return jsonify({'message': 'Product added successfully'}), 201

# Get All Products
@app.route('/products', methods=['GET'])
def get_products():
    products = get_all_products()
    return jsonify({'products': products}), 200

# Create Bill
@app.route('/bills', methods=['POST'])
def create_new_bill():
    data = request.get_json()
    customer_id = data.get('customer_id')
    user_id = data.get('user_id')
    total_amount = data.get('total_amount')

    bill_id = create_bill(customer_id, user_id, total_amount)

    # Add bill items (loop over products in the cart)
    for item in data.get('items', []):
        create_bill_item(bill_id, item['product_id'], item['quantity'], item['price'])

    return jsonify({'message': 'Bill created successfully'}), 201

@app.route("/", methods=["GET"])
def home():
    return "Hello, world!"  # or render_template(...)

