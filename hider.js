/* 
* This code was written by SIREPICLYAMAZING (https://github.com/SirEpiclyAmazing/)
* This code is open source 
*/
function customisations(){
	//Remove things we do not want to see
    if (document.getElementById("item_attracta_seotips")!=null){
       document.getElementById("item_attracta_seotips").style.display = "none"; //hide SEOTOOLS - remove to unhide
       document.getElementById("icon-attracta_seotips").style.display = "none"; // ^^^
			 document.getElementById("icon-cloudflare").style.display = "none"; // hide CLOUDFLARE - remove to unhide
			 document.getElementById("item_cloudflare").style.display = "none"; // ^^^
			 document.getElementById("icon-sitereptile").style.display = "none"; // hide sitebuilder - remove to unhide (although it was shut down)
			 document.getElementById("item_sitereptile").style.display = "none"; // ^^^
			 document.getElementById("soft_div-body").style.display = "none"; // hide the softaculous tab - remove to unhide
			 document.getElementById("soft_div-group").style.display = "none"; // ^^^
			 document.getElementById("item_accounts").style.display = "none"; // hide emailaccounts - remove to unhide (although it is paid)
			 document.getElementById("icon-accounts").style.display = "none"; // ^^^
			 document.getElementById("item_forwarders").style.display = "none"; // ^^^
			 document.getElementById("icon-forwarders").style.display = "none"; // ^^^
			 document.getElementById("item_email_filters").style.display = "none"; // ^^^
			 document.getElementById("icon-email_filters").style.display = "none"; // ^^^
			 document.getElementById("item_postgresql_databases").style.display = "none"; // hide postgresql databases - remove to unhide (although it is paid)
			 document.getElementById("icon-postgresql_databases").style.display = "none"; // ^^^ 
			 document.getElementById("icon-remote_mysql").style.display = "none"; // hide remotemysql - remove to unhide (although it is paid)
			 document.getElementById("item_remote_mysql").style.display = "none"; // ^^^
			 document.getElementById("imgPoweredByCpanel").style.display = "none"; // hide poweredbycpanel - remove to unhide
      //document.getElementById("item_useinspectelementtofindthis").style.display = "none";
      //document.getElementById("icon-useinspectelementtofindthis").style.display = "none";
			     }else{
       setTimeout(customisations,100);
    } 
}
setTimeout(customisations,100);



