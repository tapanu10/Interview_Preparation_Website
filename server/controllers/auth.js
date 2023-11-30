import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../model/auth.js';


export const signup = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the user already exists
      const existingUser = await users.findOne({ email });
  
      if (existingUser) {
        return res.status(404).json({ message: 'User already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hashSync(password, 8);
  
      // Create a new user instance
      const newUser = await users.create({
        name,
        email,
        password: hashedPassword,
      });
      const token=jwt.sign({email:newUser,id:newUser._id},"test",{expiresIn:'1h'})
        return res.status(200).json({result:newUser,token})

      // Save the user to the database
      
      // You might want to generate a token here if needed
  
      return res.status(200).json({result:newUser,token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Something went wrong...'});
    }
  };


  export const login = async (req, res) => {
    const { email, password } = req.body;
      try{
        const existingUser = await users.findOne({ email:email });
        if (!existingUser) {
            return res.status(404).json({ message: "User don't exists" });
          }
          console.log(existingUser);
          console.log(req.body.password);
          const isPasswordCrt= bcrypt.compareSync(req.body.password,existingUser.password);
          console.log(isPasswordCrt);
          if(!isPasswordCrt)
          {
            return res.status(400).json({message:"Invalid credentials"})
          }
          const token=jwt.sign({email:existingUser,id:existingUser._id},"test",{expiresIn:'1h'})
          return res.status(200).json({result:existingUser,token})
  
        // Save the user to the database
        
        // You might want to generate a token here if needed
    
        return res.status(200).json({result:existingUser,token });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong...'});
      }
  }

  async function insertData(questionAnswer,dbName) {
    try {
      for (const element of questionAnswer) {
        const data = element;
        const newResource = new dbName(data);
        await newResource.save();
      }
      console.log('Data inserted successfully.');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }

  async function fetchData(dbName) {
    try{
       const data = await dbName.find({}).sort({_id:1});
       console.log(data);
       console.log('Data fetched successfully',data);
       return data;
    } catch(error){
      console.log('Error in getting data',error);
      return error;
    }
  }

  export const uploadQuestion = async(req,res)=>{
    const topicName = req.query.topic;

    const questionAnswer = req.body;

    const dbPath = `../model/${topicName}.js`;

    const dbModule = await import(dbPath);
    const dbName = dbModule.default;

    insertData(questionAnswer,dbName);

  };
  export const fetchQuestion = async(req,res)=>{
    const topicName = req.query.topic;

    const dbPath = `../model/${topicName}.js`;

    const dbModule = await import(dbPath);
    const dbName = dbModule.default;

    const data = await fetchData(dbName);

    return res.send({status:200,data:data});
  };