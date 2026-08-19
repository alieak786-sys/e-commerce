const Products = [
    {
        _id: "1", name: "Women Round Neck Cotton Top", price: 29.99,
        description: "A soft and breathable round neck cotton top perfect for everyday wear. Features a relaxed fit with subtle texture.",
        image: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400",
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "2", name: "Women Floral Wrap Dress", price: 49.99,
        description: "An elegant floral wrap dress with a flattering silhouette. Made from lightweight chiffon for a breezy summer look.",
        image: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400",
            "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "3", name: "Men Slim Fit Polo Shirt", price: 40.99,
        description: "A classic polo shirt with a slim fit cut. Crafted from premium pique cotton for a sharp yet comfortable look.",
        image: [
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
            "https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=400",
            "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "4", name: "Women High Waist Trousers", price: 34.99,
        description: "Stylish high waist trousers with a tailored fit. Perfect for office wear or smart casual outfits.",
        image: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
        ],
        category: "Women", subCategory: "Bottomwear", sizes: ["S", "M"], date: 1716634345448, bestseller: false
    },
    {
        _id: "5", name: "Kids Striped Cotton Tee", price: 19.99,
        description: "A fun and colorful striped cotton tee for kids. Super soft fabric that is gentle on sensitive skin.",
        image: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400"
        ],
        category: "Kids", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "6", name: "Women Oversized Blazer", price: 44.99,
        description: "A trendy oversized blazer that adds instant sophistication to any outfit. Available in neutral tones.",
        image: [
            "https://images.unsplash.com/photo-1548454782-15b189d129ab?w=400",
            "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400",
            "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400",
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "7", name: "Men Cargo Pants", price: 47.99,
        description: "Durable cargo pants with multiple pockets for maximum utility. Great for outdoor adventures or casual wear.",
        image: [
            "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
            "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400"
        ],
        category: "Men", subCategory: "Bottomwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "8", name: "Kids Denim Jacket", price: 43.99,
        description: "A cool denim jacket for kids with classic styling. Features button front closure and chest pockets.",
        image: [
            "https://images.unsplash.com/photo-1594938374182-a57369df5553?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400"
        ],
        category: "Kids", subCategory: "Topwear", sizes: ["S", "M"], date: 1716634345448, bestseller: false
    },
    {
        _id: "9", name: "Women Knit Sweater", price: 23.99,
        description: "A cozy knit sweater with ribbed cuffs and hem. Perfect for layering during cooler months.",
        image: [
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
            "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=400",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400"
        ],
        category: "Women", subCategory: "Winterwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "10", name: "Men Hooded Sweatshirt", price: 39.99,
        description: "A classic hooded sweatshirt with kangaroo pocket. Made from fleece-lined fabric for extra warmth.",
        image: [
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "11", name: "Women Pleated Midi Skirt", price: 29.99,
        description: "An elegant pleated midi skirt that flows beautifully with every step. Pairs well with blouses or crop tops.",
        image: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
            "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400",
            "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400"
        ],
        category: "Women", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "12", name: "Kids Fleece Hoodie", price: 59.99,
        description: "A warm and soft fleece hoodie for kids. Features a full zip front and two side pockets.",
        image: [
            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400"
        ],
        category: "Kids", subCategory: "Winterwear", sizes: ["S", "M"], date: 1716634345448, bestseller: false
    },
    {
        _id: "13", name: "Men Formal Dress Shirt", price: 49.99,
        description: "A crisp formal dress shirt with a slim fit cut. Made from wrinkle-resistant fabric for a polished look all day.",
        image: [
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
            "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400",
            "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "14", name: "Women Satin Slip Dress", price: 51.99,
        description: "A luxurious satin slip dress with adjustable straps. Perfect for evening events or date nights.",
        image: [
            "https://images.unsplash.com/photo-1566479179817-c0b5b4b17484?w=400",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "15", name: "Kids Jogger Pants", price: 41.99,
        description: "Comfortable jogger pants for active kids. Features an elastic waistband and tapered leg for easy movement.",
        image: [
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400"
        ],
        category: "Kids", subCategory: "Bottomwear", sizes: ["S", "M"], date: 1716634345448, bestseller: true
    },
    {
        _id: "16", name: "Men Slim Fit Chinos", price: 44.99,
        description: "Versatile slim fit chinos that transition from office to weekend effortlessly. Made from stretch cotton blend.",
        image: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
            "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400",
            "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400"
        ],
        category: "Men", subCategory: "Bottomwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "17", name: "Women Puffer Jacket", price: 89.99,
        description: "A stylish puffer jacket that keeps you warm without the bulk. Features a water-resistant outer shell.",
        image: [
            "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=400",
            "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400",
            "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400",
            "https://images.unsplash.com/photo-1548454782-15b189d129ab?w=400"
        ],
        category: "Women", subCategory: "Winterwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "18", name: "Men Leather Jacket", price: 129.99,
        description: "A classic leather jacket with a modern cut. Features zip pockets and a quilted lining for warmth.",
        image: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "19", name: "Women Linen Button Shirt", price: 36.99,
        description: "A breezy linen button shirt perfect for hot summer days. Features a relaxed fit and roll-up sleeves.",
        image: [
            "https://images.unsplash.com/photo-1594938374182-a57369df5553?w=400",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "20", name: "Kids Winter Coat", price: 74.99,
        description: "A warm and cozy winter coat for kids with a detachable hood. Keeps little ones warm in freezing temperatures.",
        image: [
            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400"
        ],
        category: "Kids", subCategory: "Winterwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "21", name: "Men Graphic Tee", price: 24.99,
        description: "A bold graphic tee with artistic print. Made from 100% organic cotton for a soft and comfortable feel.",
        image: [
            "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400",
            "https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=400",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "22", name: "Women Yoga Leggings", price: 32.99,
        description: "High performance yoga leggings with a 4-way stretch fabric. Features a hidden waistband pocket.",
        image: [
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400"
        ],
        category: "Women", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "23", name: "Men Thermal Undershirt", price: 18.99,
        description: "A snug thermal undershirt that provides excellent insulation. Perfect base layer for cold weather.",
        image: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400",
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "24", name: "Kids Printed Summer Dress", price: 27.99,
        description: "An adorable printed summer dress for little girls. Features a smocked bodice and flared skirt.",
        image: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400"
        ],
        category: "Kids", subCategory: "Topwear", sizes: ["S", "M"], date: 1716634345448, bestseller: true
    },
    {
        _id: "25", name: "Women Denim Jacket", price: 59.99,
        description: "A timeless denim jacket with a relaxed fit. Features classic button front and chest pockets.",
        image: [
            "https://images.unsplash.com/photo-1548454782-15b189d129ab?w=400",
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400",
            "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400",
            "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "26", name: "Men Jogger Sweatpants", price: 37.99,
        description: "Ultra comfortable jogger sweatpants with tapered fit. Made from brushed fleece for a soft feel.",
        image: [
            "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400",
            "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=400",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400"
        ],
        category: "Men", subCategory: "Bottomwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "27", name: "Women Turtleneck Sweater", price: 45.99,
        description: "A chic turtleneck sweater in fine ribbed knit. A wardrobe essential for the cooler months.",
        image: [
            "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=400",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400"
        ],
        category: "Women", subCategory: "Winterwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "28", name: "Kids Shorts Set", price: 22.99,
        description: "A matching shorts and tee set for kids. Made from breathable cotton for all day comfort.",
        image: [
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400"
        ],
        category: "Kids", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "29", name: "Men Quilted Vest", price: 54.99,
        description: "A lightweight quilted vest that adds warmth without restricting movement. Great for layering.",
        image: [
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "30", name: "Women Ruffle Blouse", price: 31.99,
        description: "A feminine ruffle blouse with delicate detailing. Perfect for both casual and semi-formal occasions.",
        image: [
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400",
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "31", name: "Men Denim Shirt", price: 42.99,
        description: "A rugged denim shirt with a classic western-inspired design. Features snap button closure.",
        image: [
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400",
            "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400",
            "https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=400",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "32", name: "Women Wide Leg Pants", price: 38.99,
        description: "Flowy wide leg pants with a high rise waist. Made from lightweight fabric that drapes beautifully.",
        image: [
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
            "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400",
            "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400",
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400"
        ],
        category: "Women", subCategory: "Bottomwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "33", name: "Kids Puffer Jacket", price: 64.99,
        description: "A warm and cozy puffer jacket for kids with a fun color block design. Water resistant and windproof.",
        image: [
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400"
        ],
        category: "Kids", subCategory: "Winterwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "34", name: "Men Track Jacket", price: 55.99,
        description: "A sporty track jacket with contrast stripe detailing. Features a full zip front and two side pockets.",
        image: [
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "35", name: "Women Cardigan", price: 46.99,
        description: "A cozy open front cardigan with a longline silhouette. Perfect for layering over dresses or tops.",
        image: [
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400",
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
            "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=400"
        ],
        category: "Women", subCategory: "Winterwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "36", name: "Kids Graphic Sweatshirt", price: 33.99,
        description: "A fun graphic sweatshirt for kids with playful print. Made from soft cotton blend fleece.",
        image: [
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400"
        ],
        category: "Kids", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "37", name: "Men Linen Shirt", price: 41.99,
        description: "A relaxed linen shirt perfect for warm weather. Features a classic collar and chest pocket.",
        image: [
            "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400",
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400",
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
            "https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "38", name: "Women Wrap Skirt", price: 28.99,
        description: "A versatile wrap skirt with a flattering draped front. Works for both casual and office looks.",
        image: [
            "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400",
            "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400",
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=400"
        ],
        category: "Women", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "39", name: "Men Bomber Jacket", price: 79.99,
        description: "A sleek bomber jacket with ribbed cuffs and hem. Features a satin lining and multiple pockets.",
        image: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "40", name: "Kids Leggings", price: 16.99,
        description: "Stretchy and comfortable leggings for active kids. Features an elastic waistband for easy on and off.",
        image: [
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400"
        ],
        category: "Kids", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "41", name: "Women Off Shoulder Top", price: 26.99,
        description: "A flirty off shoulder top with elasticated neckline. Perfect for summer parties and beach outings.",
        image: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400",
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "42", name: "Men Wool Coat", price: 149.99,
        description: "A premium wool coat with a tailored fit. Features a double breasted front and slit pockets.",
        image: [
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "43", name: "Women Cropped Hoodie", price: 35.99,
        description: "A trendy cropped hoodie with kangaroo pocket. Great for casual days or gym sessions.",
        image: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
            "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "44", name: "Kids Denim Shorts", price: 21.99,
        description: "Classic denim shorts for kids with a comfortable elastic waistband. Perfect for summer adventures.",
        image: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400"
        ],
        category: "Kids", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "45", name: "Men Henley Shirt", price: 33.99,
        description: "A casual henley shirt with a 3-button placket. Made from soft jersey fabric for all day comfort.",
        image: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400",
            "https://images.unsplash.com/photo-1598032895397-b9472444bf93?w=400",
            "https://images.unsplash.com/photo-1604006852748-903fccbc4019?w=400",
            "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400"
        ],
        category: "Men", subCategory: "Topwear", sizes: ["S", "M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "46", name: "Women Maxi Dress", price: 62.99,
        description: "A flowing maxi dress with a boho-inspired print. Features adjustable straps and a tiered skirt.",
        image: [
            "https://images.unsplash.com/photo-1566479179817-c0b5b4b17484?w=400",
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
            "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400"
        ],
        category: "Women", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "47", name: "Men Fleece Pullover", price: 48.99,
        description: "A cozy fleece pullover with a quarter zip neck. Perfect for outdoor activities in cool weather.",
        image: [
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: false
    },
    {
        _id: "48", name: "Kids Polo Shirt", price: 18.99,
        description: "A smart polo shirt for kids with a classic collar. Made from breathable pique cotton.",
        image: [
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400",
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400"
        ],
        category: "Kids", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
    {
        _id: "49", name: "Women Corset Top", price: 39.99,
        description: "A structured corset top with boning detail. Adds an instant hourglass shape to any outfit.",
        image: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
            "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400",
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "50", name: "Men Trench Coat", price: 119.99,
        description: "A classic trench coat with a belted waist. Timeless design that never goes out of style.",
        image: [
            "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=400",
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
            "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400"
        ],
        category: "Men", subCategory: "Winterwear", sizes: ["M", "L", "XL"], date: 1716634345448, bestseller: true
    },
    {
        _id: "51", name: "Kids Track Suit", price: 45.99,
        description: "A matching track suit set for active kids. Made from moisture wicking fabric for sports and play.",
        image: [
            "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
            "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=400"
        ],
        category: "Kids", subCategory: "Bottomwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: false
    },
    {
        _id: "52", name: "Women Asymmetric Top", price: 33.99,
        description: "A fashion forward asymmetric top with one shoulder detail. Makes a bold style statement.",
        image: [
            "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=400",
            "https://images.unsplash.com/photo-1548454782-15b189d129ab?w=400",
            "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400",
            "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400"
        ],
        category: "Women", subCategory: "Topwear", sizes: ["S", "M", "L"], date: 1716634345448, bestseller: true
    },
];

export default Products;