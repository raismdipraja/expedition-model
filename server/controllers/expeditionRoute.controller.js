// view data 
const readExpeditionRouteMethod = async (req, res)=>{
    const expeditionRoute = await req.context.models.expeditionRoute.findAll(
        {
            include: [
                {
                    model: req.context.models.expedition,
                }
            ]    
        }
    );
    
    return res.send(expeditionRoute);
}


// filter data
const findExpeditionRouteMethod = async (req, res)=>{
    const expeditionRoute = await req.context.models.expeditionRoute.findByPk(
        req.params.exroId
    );
    return res.send(expeditionRoute);
}


// add Data
const addExpeditionRouteMethod = async (req, res)=>{
    const { exro_from, exro_to, exro_cost, exro_desc, exro_duration,exro_package, exro_expe_id} = req.body.data;
    const expeditionRoute = await req.context.models.expeditionRoute.create({
        exro_from: exro_from,
        exro_to: exro_to,
        exro_cost:exro_cost,
        exro_desc: exro_desc,
        exro_duration: exro_duration,
        exro_package: exro_package,
        exro_expe_id: exro_expe_id
    });
    return res.send(expeditionRoute);
}



const editExpeditionRouteMethod = async (req, res)=>{
    const {exro_from, exro_to, exro_cost, exro_desc, exro_duration,exro_package, exro_expe_id} = req.body.data;
    const expeditionRoute = await req.context.models.expeditionRoute.update({
        exro_from: exro_from,
        exro_to: exro_to,
        exro_cost:exro_cost,
        exro_desc: exro_desc,
        exro_duration: exro_duration,
        exro_package: exro_package,
        exro_expe_id: exro_expe_id
    },
    {
        returning: true,
        where: { exro_id: req.params.exroId }
    });
    console.log(expeditionRoute)
    return res.send(expeditionRoute);
}



const deleteExpeditionRouteMethod = async (req, res)=>{
    const expeditionRoute = await req.context.models.expeditionRoute.destroy({
        where: {exro_id : req.params.exroId}
    });
    return res.send("Berhasil");

};




export default {
    readExpeditionRouteMethod,
    findExpeditionRouteMethod,
    addExpeditionRouteMethod,
    editExpeditionRouteMethod,
    deleteExpeditionRouteMethod,
}