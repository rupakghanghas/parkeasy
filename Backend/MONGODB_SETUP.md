# MongoDB Connection Setup Guide

## Step 1: Create a `.env` file

Create a `.env` file in the `Backend/` directory with the following content:

```env
# MongoDB Connection String
DB_URI=mongodb://your-username:your-password@your-host:your-port/your-database-name

# Server Configuration
PORT=5100

# JWT Secret (for authentication)
JWT_SECRET=your-super-secret-jwt-key-here
```

## Step 2: MongoDB Connection String Formats

### For Local MongoDB (no authentication):
```env
DB_URI=mongodb://localhost:27017/reserve_system
```

### For Local MongoDB with authentication:
```env
DB_URI=mongodb://username:password@localhost:27017/reserve_system
```

### For MongoDB Atlas (cloud):
```env
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/reserve_system
```

### For Remote MongoDB Server:
```env
DB_URI=mongodb://username:password@your-server-ip:27017/reserve_system
```

## Step 3: Replace the placeholders

Replace the following in your `.env` file:
- `your-username` → Your MongoDB username
- `your-password` → Your MongoDB password
- `your-host` → Your MongoDB server host/IP
- `your-port` → Your MongoDB port (usually 27017)
- `your-database-name` → Your database name (e.g., `reserve_system`)

## Step 4: Test the connection

Run your backend server:
```bash
cd Backend
npm run dev
```

You should see:
```
✅ MongoDB Connected Successfully...
📊 Database: your-database-name
🌐 Host: your-host
🔌 Port: your-port
```

## Common Issues and Solutions

### 1. Connection Refused
- Check if MongoDB is running on your server
- Verify the host and port are correct
- Ensure firewall allows connections on port 27017

### 2. Authentication Failed
- Double-check username and password
- Ensure the user has access to the database
- Check if the user exists in the correct authentication database

### 3. Network Issues
- For remote connections, ensure MongoDB is configured to accept external connections
- Check if `bindIp` in MongoDB config allows your connection
- Verify network connectivity between your app and MongoDB server

## Security Notes

1. **Never commit your `.env` file** to version control
2. Use strong passwords for your MongoDB users
3. Consider using MongoDB Atlas for production environments
4. Enable SSL/TLS for production connections 