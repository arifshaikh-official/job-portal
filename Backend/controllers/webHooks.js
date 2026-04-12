// import { Webhook } from 'svix';
// import User from '../models/User.js'

// export const clerkWebhooks = async (req, res) => {
//     try {
//         const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
//         await whook.verify(req.body.toString(), {
//             "svix-id": req.headers["svix-id"],
//             "svix-timestamp": req.headers["svix-timestamp"],
//             "svix-signature": req.headers["svix-signature"]
//         });
         
//         const { data, type } = JSON.parse(req.body.toString())

//         switch (type) {
//             case 'user.created': {
//                 const userData = {
//                     _id: data.id,
//                     email: data.email_addresses[0].email_address,
//                     name: data.first_name + " " + data.last_name,
//                     image: data.image_url,  
//                     resume: ' '
//                 }
//                 await User.create(userData)
//                 res.json({})
//                 break;
//             }
//             case 'user.updated': {      
//                  const userData = {
//                     email: data.email_addresses[0].email_address,
//                     name: data.first_name + " " + data.last_name,
//                     image: data.image_url
//                  }  
//                  await User.findByIdAndUpdate(data.id, userData) 
//                 res.json({}) 
//                 break;
//             }
//             case 'user.deleted': {
//                await User.findByIdAndDelete(data.id)
//                res.json({})
//                 break;
//             }
//             default:
//                 break;
//         }
//     } catch (error) {
//         console.log(error.message);
//         res.json({ success: false, message: 'Webhooks Error' });
//     }
// };




import { Webhook } from 'svix';
import User from '../models/User.js'

export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        await whook.verify(req.body.toString(), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

        const { data, type } = JSON.parse(req.body.toString())

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_addresses[0]?.email_address || '',
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url,
                    resume: ''
                }
                await User.create(userData)
                return res.json({ success: true })
            }
            case 'user.updated': {
                const userData = {
                    email: data.email_addresses[0]?.email_address || '',
                    name: data.first_name + " " + data.last_name,
                    image: data.image_url
                }
                await User.findByIdAndUpdate(data.id, userData)
                return res.json({ success: true })
            }
            case 'user.deleted': {
                await User.findByIdAndDelete(data.id)
                return res.json({ success: true })
            }
            default:
                return res.json({ success: false, message: 'Unknown event' })
        }
    } catch (error) {
        console.log("WEBHOOK ERROR:", error.message)
        res.status(400).json({ success: false, message: error.message })
    }
};