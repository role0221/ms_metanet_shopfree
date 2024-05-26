import * as jwt from 'jsonwebtoken';
import axios from "axios";
import { CreateRegisterDto } from '@src/cms-management/dto/create-cms.dto';

export const registerUser = async (createRegisterDto?: CreateRegisterDto) => {
    try {
        const encodedToken = jwt.sign({ data: createRegisterDto || [] }, process.env.JWT_SECRET);
        const body = encodedToken
        const response = await axios.post(`${process.env.MS_CMS_API}/user/private`, body);

        return response.data;
    } catch (error) {
        console.error("Error during axios request:", error);
        throw error;
    }
};