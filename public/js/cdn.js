!function(){var a="Seleccione imagen";$("#uploadFile");Dropzone.options.uploadFile={url:"https://api.cloudinary.com/v1_1/msc/image/upload",paramName:"file",dictDefaultMessage:a,createImageThumbnails:!1,previewsContainer:!1,parallelUploads:1,init:function(){var e=$("#load_image_span"),i=$("#load_image_span"),n=$("#load_image_span_categorie"),t=$("#load_image_span_subcategorie"),l=$("#load_image_span_content"),r=$("#load_image_brands_span"),o=this;this.on("uploadprogress",function(a,e){i.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."+e.toFixed(2)+"%"),n.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."+e.toFixed(2)+"%"),t.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."+e.toFixed(2)+"%"),l.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."+e.toFixed(2)+"%"),r.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."+e.toFixed(2)+"%")}),this.on("complete",function(){e.off("click.cancelUpload")}),this.on("sending",function(a,p,d){d.append("upload_preset","wbcss2yj"),i.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."),n.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."),t.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."),l.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."),r.html("Subiendo <b>"+a.name+"</b>, pulsa para cancelar..."),e.on("click.cancelUpload",function(e){e.stopPropagation(),o.removeFile(a)})}),this.on("success",function(e,o){if(o.secure_url){i.html("Archivo subido: "+e.name),n.html("Archivo subido: "+e.name),t.html("Archivo subido: "+e.name),l.html("Archivo subido: "+e.name),r.html("Archivo subido: "+e.name);var p=o.public_id,d=p.split("."),u=o.secure_url,s=u.split("/"),c="https://res.cloudinary.com/msc/image/upload/t_media_lib_thumb/"+s[6]+"/"+s[7];$("#input_categorie_image_url").val(u),$("#input_subcategorie_image_url").val(u),$("#input_content_image_url").val(u),$(".page-content-wrapper-publication").find(".page-content").attr("style","min-height : 270px !important"),$("#images_upload").slideDown(),$("#images_upload").append('<div class="col-md-3" style="background-image: url('+c+');background-repeat: no-repeat; height: 99px;"><a href="javascript:;" class="btn_principalimage" style="margin-right: 10px; margin-top:1em;"><span class="badge badge-danger"><i class="fa fa-star"></i></span></a><a href="javascript:;" id="btn_deleteimage"><span class="badge badge-danger"><i class="fa fa-close"></i></span></a><input type="hidden" id="document_type" value="'+d[1]+'" /><input type="hidden" id="document_id" value="'+d[0]+'" /><input type="hidden" id="document_url" value="'+o.secure_url+'" /><input type="hidden" id="document_url_thumb" value="'+c+'" /></div>'),$("#images_brands_upload").slideDown(),$("#images_brands_upload").append('<div class="col-md-3" style="background-image: url('+c+');background-repeat: no-repeat; height: 99px;"><a href="javascript:;" class="btn_principalimage" style="margin-right: 10px; margin-top:1em;"></a><a href="javascript:;" id="btn_deleteimage"><span class="badge badge-danger"><i class="fa fa-close"></i></span></a><input type="hidden" id="document_type" value="'+d[1]+'" /><input type="hidden" id="document_id" value="'+d[0]+'" /><input type="hidden" id="document_url" value="'+o.secure_url+'" /><input type="hidden" id="document_url_thumb" value="'+c+'" /></div>')}else i.text(a)}),this.on("error",function(e,n,t){n&&n.error?alert(n.error.message||"Ocurrio un error"):alert("Ocurrio un error"),i.text(a)})}}}();