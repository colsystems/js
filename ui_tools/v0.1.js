$.selectOptions = function(list, key, value, selected_id){
    var selected = ''
    var newList = ''

    key = key || 'key'
    value = value || 'value'
    selected_id = selected_id || false

    if(list.length>0){
        list.forEach(function(v,k){
            if(selected_id){
                if(selected==v[key]){
                    selected = ' selected'
                }else{
                    selected = ''
                }
            }
            newList += '<option value="'+v[key]+'"'+selected+'>'+v[value]+'</option>'
        })
    }
    return newList
}

$.loading = function(el, text){
    text = text || ''
    var loader = '<div><div class="cssload-speeding-wheel" style="width:15px; height:15px; float:left; position:relative; top:2px; margin-right:4px;"></div>'+text+'</div>'
    if(text=='close'){
        loader = ''
    }
    el.html(loader)
} 

//BOOTSTRAP
$.alert = function(msg, title, callback){
    msg = msg || ''
    title = title || 'Mensaje: '
    callback = callback || {}
    var target = jQuery('#myModalAlert')
    target.find(".modal-title").html(title)
    target.find(".modal-body").html(msg)
    target.modal();
    if(typeof alertActon == 'function'){
        $.alertActon = callback
    }
}

$.alertActon = {}