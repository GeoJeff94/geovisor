var wms_layers = [];


        var lyr_ESRIImagery_0 = new ol.layer.Tile({
            'title': 'ESRI Imagery',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_GDB_PLANEACIONR_TERRENO_1 = new ol.format.GeoJSON();
var features_GDB_PLANEACIONR_TERRENO_1 = format_GDB_PLANEACIONR_TERRENO_1.readFeatures(json_GDB_PLANEACIONR_TERRENO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GDB_PLANEACIONR_TERRENO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GDB_PLANEACIONR_TERRENO_1.addFeatures(features_GDB_PLANEACIONR_TERRENO_1);
var lyr_GDB_PLANEACIONR_TERRENO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GDB_PLANEACIONR_TERRENO_1, 
                style: style_GDB_PLANEACIONR_TERRENO_1,
                popuplayertitle: "GDB_PLANEACION — R_TERRENO",
                interactive: true,
                title: '<img src="styles/legend/GDB_PLANEACIONR_TERRENO_1.png" /> GDB_PLANEACION — R_TERRENO'
            });

lyr_ESRIImagery_0.setVisible(true);lyr_GDB_PLANEACIONR_TERRENO_1.setVisible(true);
var layersList = [lyr_ESRIImagery_0,lyr_GDB_PLANEACIONR_TERRENO_1];
lyr_GDB_PLANEACIONR_TERRENO_1.set('fieldAliases', {'CODIGO': 'CODIGO', 'SHAPE_Area': 'SHAPE_Area', 'Direccion': 'Direccion', 'Area_Terre': 'Area_Terre', 'Area_Const': 'Area_Const', });
lyr_GDB_PLANEACIONR_TERRENO_1.set('fieldImages', {'CODIGO': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Direccion': 'TextEdit', 'Area_Terre': 'TextEdit', 'Area_Const': 'TextEdit', });
lyr_GDB_PLANEACIONR_TERRENO_1.set('fieldLabels', {'CODIGO': 'inline label - always visible', 'SHAPE_Area': 'hidden field', 'Direccion': 'hidden field', 'Area_Terre': 'hidden field', 'Area_Const': 'hidden field', });
lyr_GDB_PLANEACIONR_TERRENO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});