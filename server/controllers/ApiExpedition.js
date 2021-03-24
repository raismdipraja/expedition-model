import {sequelize} from '../models/IndexModel'


const cekOngkir= async (req, res)=>{
    console.log(req.params)
    const exro = await sequelize.query(`select * from expedition_route join expedition on expedition.expe_id = expedition_route.exro_expe_id where 
    upper(exro_from)=upper(:city_from) and upper(exro_to)=upper(:city_to)
    and exro_expe_id=:expe_id and upper(exro_package)=upper(:package)`,{
        
        replacements: {
            city_from : req.params.city_from,
            city_to : req.params.city_to,
            expe_id : req.params.expe_id,
            package : req.params.package
         }, type: sequelize.QueryTypes.SELECT
    }
    
    )

    
    return res.send(exro)
}

export default {cekOngkir}