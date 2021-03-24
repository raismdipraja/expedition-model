// view data 
const readExpeditionMethod = async (req, res)=>{
    const expedition = await req.context.models.expedition.findAll();
    return res.send(expedition);
}



// filter data
const findExpeditionMethod = async (req, res)=>{
    const expedition = await req.context.models.expedition.findByPk(
        req.params.expeId
    );
    return res.send(expedition);
}


// add Data
const addExpeditionMethod = async (req, res)=>{
    const {expe_name} = req.body.data;
    const expedition = await req.context.models.expedition.create({
        expe_name: expe_name
    });
    return res.send(expedition);
}


const editExpeditionMethod = async (req, res)=>{
    const {expe_name} = req.body.data;
    const expedition = await req.context.models.expedition.update({
        expe_name: expe_name
    },
    {
        returning: true,
        where: { expe_id: req.params.expeId }
    });
    return res.send(expedition);
}

const deleteExpeditionMethod = async (req, res)=>{
    const expedition = await req.context.models.expedition.destroy({
        where: {expe_id : req.params.expeId}
    });
    console.log(expedition)
    return res.send(true);
};



export default {
    readExpeditionMethod,
    findExpeditionMethod,
    addExpeditionMethod,
    editExpeditionMethod,
    deleteExpeditionMethod
}