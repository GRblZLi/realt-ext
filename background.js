(function($){
   $(function(){

   });
    parser = {
        init: function(){

        },
        parse: function(){
            var items = [];
            for (var i = 0; i < dataSource.length; i++) {
                var dataSourceSettings = dataSource[i];
                var source = $.get(dataSourceSettings.url);
                $(source).find(dataSourceSettings.itemsContainer + ' ' + dataSourceSettings.item).each(function(){
                    var item = {
                        'title':'no title',
                        'description': 'no title',
                        'image': 'no image',
                        'cost': '0',
                        'date': 'no date',
                        'place': 'no place'
                    };
                    for (var key in item) {
                        var value = $(this).find(dataSourceSettings.dataHolders[key]);
                        if (value) {
                            item[key] = value;
                        }
                        //var value = $(source);//dataSourceSettings[key]
                    }
                    items.push(item);
                });
            }
            console.log(items);
        }
    }
})(jQuery)
dataSource = [
    {
        'name': 'IRR.by',
        'url':'http://mogilev.irr.by/realestate/longtime/search/rooms=1,2,3/price=%D0%BC%D0%B5%D0%BD%D1%8C%D1%88%D0%B5%204200000/currency=BYR/',
        'dataHolders': {
            'itemsContainer': '#container .adds_list',
            'item': '.add_list',
            'title': '.add_title_wrap',
            'description': '',
            'image': '.pic_wrap',
            'cost': '.add_cost_wrap',
            'date': '.add_data',
            'place': '.add_place'
        }
    }//,
    //{
    //    'name': 'OLX.by',
    //    'url':'http://olx.by/nedvizhimost/arenda-kvartir/mogilev/?search%5Bfilter_float_price%3Ato%5D=4200000&search%5Bfilter_float_price%3Afrom%5D=1000000&search%5Bfilter_float_number_of_rooms%3Ato%5D=3',
    //    'dataHolders': {
    //        'title': '',
    //        'description': '',
    //        'cost': '',
    //        'date': '',
    //        'place': ''
    //    }
    //},
    //{
    //    'name': 'KUFAR.by',
    //    'url':'https://www.kufar.by/%D0%BC%D0%BE%D0%B3%D0%B8%D0%BB%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F/%D0%9A%D0%B2%D0%B0%D1%80%D1%82%D0%B8%D1%80%D1%8B-%D0%B2_%D0%B0%D1%80%D0%B5%D0%BD%D0%B4%D1%83?cu=BYR&sp=&ps=&pe=4200000&ros=&roe=3&fls=&fle=&ss=&se=',
    //    'dataHolders': {
    //        'title': '',
    //        'description': '',
    //        'cost': '',
    //        'date': '',
    //        'place': ''
    //    }
    //}
]