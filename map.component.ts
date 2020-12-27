import { Component,  NgZone,  OnDestroy, OnInit } from '@angular/core';
import { Map, SymbolLayout } from "mapbox-gl";
import { LngLatLike } from 'mapbox-gl';
import * as mapboxgl from 'mapbox-gl';
import { NzMessageService } from 'ng-zorro-antd/message';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';



registerLocaleData(en);

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  center: LngLatLike;
  zoom = [0];
  pitch: number;
  labelLayerId: string;
  navigation = 0;
  lat = 47.92030738716001;
  lng = 106.91717391553594;
  khentii = false;  
  dornod = false;
  sukhbaatar = false;
  coreMap = false;
  location1 = 'Улаанбаатар';
  location2 = ''
  valueRoom = "1room"
  array = [1, 2, 3, 4];
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  geometryDornod = {
    type: 'LineString',
    coordinates: [
      [
        106.9189453125,
        47.916342040161155
      ],
      [
        106.99447631835938,
        47.913580765920166
      ],
      [
        107.04803466796875,
        47.898851481269304
      ],
      [
        107.05764770507812,
        47.89701002596687
      ],
      [
        107.07000732421875,
        47.88872266659918
      ],
      [
        107.08236694335938,
        47.88688085106901
      ],
      [
        107.21832275390624,
        47.78824822248784
      ],
      [
        107.24166870117186,
        47.78917089079263
      ],
      [
        107.29110717773438,
        47.787325537803106
      ],
      [
        107.3968505859375,
        47.77256035513371
      ],
      [
        107.42431640625,
        47.777174925180354
      ],
      [
        107.52456665039062,
        47.80485374589339
      ],
      [
        107.59735107421875,
        47.80024163283363
      ],
      [
        107.65640258789062,
        47.78178908571313
      ],
      [
        107.75253295898438,
        47.74948136196792
      ],
      [
        107.76763916015625,
        47.74394088010389
      ],
      [
        107.78961181640625,
        47.71807749987609
      ],
      [
        107.87063598632812,
        47.68850362252604
      ],
      [
        107.88162231445311,
        47.68665469810477
      ],
      [
        107.90084838867188,
        47.695898664798875
      ],
      [
        107.92694091796875,
        47.69867153529717
      ],
      [
        107.96127319335938,
        47.71715357016648
      ],
      [
        107.98599243164062,
        47.720849190702324
      ],
      [
        108.02719116210938,
        47.71715357016648
      ],
      [
        108.06838989257811,
        47.714381682734256
      ],
      [
        108.09310913085938,
        47.71530566159559
      ],
      [
        108.16452026367188,
        47.69312564683551
      ],
      [
        108.23181152343749,
        47.690352481405704
      ],
      [
        108.24554443359375,
        47.68850362252604
      ],
      [
        108.28674316406249,
        47.76609926907284
      ],
      [
        108.32382202148438,
        47.78178908571313
      ],
      [
        108.369140625,
        47.77256035513371
      ],
      [
        108.43093872070312,
        47.74394088010389
      ],
      [
        108.4295654296875,
        47.70606513569572
      ],
      [
        108.4515380859375,
        47.694050002541715
      ],
      [
        108.46389770507812,
        47.69774726151598
      ],
      [
        108.468017578125,
        47.694050002541715
      ],
      [
        108.53530883789062,
        47.695898664798875
      ],
      [
        108.66302490234375,
        47.78363463526376
      ],
      [
        108.71932983398438,
        47.80393135603966
      ],
      [
        108.73580932617188,
        47.806698476463836
      ],
      [
        108.7646484375,
        47.79378398661931
      ],
      [
        108.7921142578125,
        47.810387741058335
      ],
      [
        108.81134033203125,
        47.80577611936809
      ],
      [
        108.85940551757812,
        47.76702233051035
      ],
      [
        108.92120361328125,
        47.758714187846294
      ],
      [
        108.984375,
        47.74486433470359
      ],
      [
        108.99261474609375,
        47.74486433470359
      ],
      [
        109.09286499023438,
        47.68850362252604
      ],
      [
        109.11209106445312,
        47.679258344995304
      ],
      [
        109.127197265625,
        47.66168780332917
      ],
      [
        109.13955688476562,
        47.65521295468836
      ],
      [
        109.1876220703125,
        47.615421267605434
      ],
      [
        109.25491333007812,
        47.59505101193038
      ],
      [
        109.29611206054688,
        47.585789182379905
      ],
      [
        109.31121826171875,
        47.56911375866714
      ],
      [
        109.38262939453125,
        47.5459446373605
      ],
      [
        109.47189331054686,
        47.484728927366504
      ],
      [
        109.51995849609375,
        47.48008846346322
      ],
      [
        109.54193115234374,
        47.46523622438362
      ],
      [
        109.58724975585938,
        47.46709298382174
      ],
      [
        109.654541015625,
        47.46059403884124
      ],
      [
        109.67788696289062,
        47.455951443369926
      ],
      [
        109.72183227539061,
        47.43923470537306
      ],
      [
        109.76577758789062,
        47.447593738482304
      ],
      [
        109.78500366210938,
        47.44852243794931
      ],
      [
        109.81109619140625,
        47.454094290400015
      ],
      [
        109.82208251953125,
        47.45780853075031
      ],
      [
        109.85366821289061,
        47.418795921472714
      ],
      [
        109.93743896484375,
        47.41600819961789
      ],
      [
        110.13656616210938,
        47.42158349573474
      ],
      [
        110.26016235351562,
        47.40299687942138
      ],
      [
        110.28350830078125,
        47.40020832118433
      ],
      [
        110.29861450195311,
        47.39277144427804
      ],
      [
        110.41397094726562,
        47.37603463349758
      ],
      [
        110.45928955078125,
        47.38254402467962
      ],
      [
        110.52658081054688,
        47.34905859411952
      ],
      [
        110.59661865234375,
        47.33789206010502
      ],
      [
        110.64743041992188,
        47.32299967378833
      ],
      [
        110.69549560546874,
        47.2736386488847
      ],
      [
        110.96466064453125,
        47.28295557691231
      ],
      [
        111.0662841796875,
        47.287613425713516
      ],
      [
        111.09786987304688,
        47.28388717948357
      ],
      [
        111.13357543945312,
        47.29413372501023
      ],
      [
        111.21185302734375,
        47.29692789291742
      ],
      [
        111.29768371582031,
        47.29040793812928
      ],
      [
        111.324462890625,
        47.300653220457775
      ],
      [
        111.33407592773438,
        47.31462086107463
      ],
      [
        111.42059326171874,
        47.32299967378833
      ],
      [
        111.44256591796875,
        47.33510005753559
      ],
      [
        111.49131774902342,
        47.343940892562685
      ],
      [
        111.51260375976562,
        47.345801932356316
      ],
      [
        111.57783508300781,
        47.343940892562685
      ],
      [
        111.60186767578125,
        47.33975331313596
      ],
      [
        111.654052734375,
        47.352780247239586
      ],
      [
        111.73370361328125,
        47.36394363198492
      ],
      [
        111.7913818359375,
        47.37649961666246
      ],
      [
        111.86073303222656,
        47.385333517742595
      ],
      [
        111.8964385986328,
        47.3834738721015
      ],
      [
        111.96510314941406,
        47.484264899421746
      ],
      [
        112.01591491699219,
        47.51395442456294
      ],
      [
        112.05986022949217,
        47.52740196355499
      ],
      [
        112.07977294921875,
        47.539918987629584
      ],
      [
        112.09075927734375,
        47.5394554474239
      ],
      [
        112.10243225097656,
        47.5366741201253
      ],
      [
        112.14088439941406,
        47.54455416428098
      ],
      [
        112.16285705566406,
        47.54640812019053
      ],
      [
        112.17109680175781,
        47.55984733956309
      ],
      [
        112.21435546875,
        47.57004031042246
      ],
      [
        112.22808837890625,
        47.57467282332527
      ],
      [
        112.27409362792969,
        47.56679730756511
      ],
      [
        112.37709045410156,
        47.59042030203756
      ],
      [
        112.40043640136719,
        47.60477416894759
      ],
      [
        112.41279602050781,
        47.62236385985822
      ],
      [
        112.44918823242188,
        47.64549917614882
      ],
      [
        112.48626708984375,
        47.69173908255399
      ],
      [
        112.54669189453125,
        47.73331997471025
      ],
      [
        112.57072448730469,
        47.74948136196792
      ],
      [
        112.63389587402344,
        47.78178908571313
      ],
      [
        112.68264770507812,
        47.79609038097321
      ],
      [
        112.752685546875,
        47.80208652719499
      ],
      [
        112.76710510253906,
        47.8043925530139
      ],
      [
        112.82409667968749,
        47.86247061177144
      ],
      [
        112.90031433105469,
        47.9002325297653
      ],
      [
        112.9779052734375,
        47.929226038300406
      ],
      [
        113.22509765625,
        47.964180715412276
      ],
      [
        113.33221435546875,
        47.97889140226657
      ],
      [
        113.8568115234375,
        47.995435916095225
      ],
      [
        114.23583984374999,
        47.99911175452292
      ],
      [
        114.37042236328125,
        48.00646264573117
      ],
      [
        114.41986083984375,
        48.035855735787315
      ],
      [
        114.400634765625,
        48.04503763958813
      ],
      [
        114.56817626953125,
        48.085418575511966
      ],
      [
        114.60937499999999,
        48.158757304569235
      ],
      [
        114.73297119140625,
        48.25394114463431
      ],
      [
        114.75494384765626,
        48.28502057399577
      ],
      [
        114.75219726562499,
        48.328865239704655
      ],
      [
        114.88677978515625,
        48.436489955944154
      ]
    
    ]
  };
  geometryKhentii = {
    type: 'LineString',
    coordinates: [
      [
        106.9134521484375,
        47.916342040161155
      ],
      [
        107.0672607421875,
        47.89424772020999
      ],
      [
        107.2210693359375,
        47.787325537803106
      ],
      [
        107.38037109375,
        47.77256035513371
      ],
      [
        107.545166015625,
        47.80577611936809
      ],
      [
        107.76489257812499,
        47.743017409121826
      ],
      [
        107.852783203125,
        47.68757916850813
      ],
      [
        107.9791259765625,
        47.71715357016648
      ],
      [
        108.1658935546875,
        47.69867153529717
      ],
      [
        108.2427978515625,
        47.68757916850813
      ],
      [
        108.2977294921875,
        47.79470655664555
      ],
      [
        108.4075927734375,
        47.75779097897638
      ],
      [
        108.446044921875,
        47.70606513569572
      ],
      [
        108.5394287109375,
        47.69867153529717
      ],
      [
        108.67675781249999,
        47.80208652719499
      ],
      [
        108.7371826171875,
        47.80577611936809
      ],
      [
        108.78662109375,
        47.80208652719499
      ],
      [
        108.83056640625,
        47.79470655664555
      ],
      [
        108.929443359375,
        47.76148371616669
      ],
      [
        109.09423828125,
        47.68018294648414
      ],
      [
        109.1766357421875,
        47.61356975397398
      ],
      [
        109.2755126953125,
        47.5913464767971
      ],
      [
        109.4183349609375,
        47.52461999690651
      ],
      [
        109.5391845703125,
        47.45780853075031
      ],
      [
        109.786376953125,
        47.46523622438362
      ],
      [
        109.84680175781249,
        47.42065432071318
      ],
      [
        110.14892578125,
        47.42437092240519
      ],
      [
        110.335693359375,
        47.39091206104779
      ],
      [
        110.467529296875,
        47.387193097780425
      ],
      [
        110.6597900390625,
        47.327653995607115
      ]
    ],
  };
  geometrySukhbaar = {
    type: 'LineString',
    coordinates: [
      [
        106.91825866699219,
        47.91772262202397
      ],
      [
        106.97250366210938,
        47.916342040161155
      ],
      [
        106.97662353515624,
        47.91173983456231
      ],
      [
        106.99790954589844,
        47.91312053922049
      ],
      [
        107.05009460449219,
        47.89701002596687
      ],
      [
        107.0624542236328,
        47.89701002596687
      ],
      [
        107.06932067871094,
        47.88872266659918
      ],
      [
        107.08442687988281,
        47.8859599187424
      ],
      [
        107.09747314453125,
        47.879973459491545
      ],
      [
        107.22038269042969,
        47.78870955868773
      ],
      [
        107.25265502929688,
        47.78870955868773
      ],
      [
        107.26638793945312,
        47.78824822248784
      ],
      [
        107.29042053222656,
        47.786864189318266
      ],
      [
        107.30964660644531,
        47.78548011929362
      ],
      [
        107.40097045898438,
        47.77117590426355
      ],
      [
        107.51152038574219,
        47.79885791906709
      ],
      [
        107.52731323242188,
        47.80393135603966
      ],
      [
        107.59735107421875,
        47.80116408820393
      ],
      [
        107.64747619628905,
        47.78225047924338
      ],
      [
        107.65777587890625,
        47.77671348660394
      ],
      [
        107.76008605957031,
        47.74901967767144
      ],
      [
        107.79304504394531,
        47.71761553706927
      ],
      [
        107.87200927734375,
        47.68757916850813
      ],
      [
        107.90771484375,
        47.702368466573716
      ],
      [
        107.9296875,
        47.700520033704954
      ],
      [
        107.97637939453125,
        47.724544549099676
      ],
      [
        108.028564453125,
        47.71715357016648
      ],
      [
        108.1768798828125,
        47.69867153529717
      ],
      [
        108.23455810546875,
        47.68757916850813
      ],
      [
        108.30322265624999,
        47.78548011929362
      ],
      [
        108.39111328125,
        47.77071441244973
      ],
      [
        108.4295654296875,
        47.748557989279426
      ],
      [
        108.43231201171875,
        47.71345768748889
      ],
      [
        108.44329833984374,
        47.69497434186282
      ],
      [
        108.55316162109375,
        47.69682297134991
      ],
      [
        108.665771484375,
        47.78917089079263
      ],
      [
        108.7261962890625,
        47.8094654494779
      ],
      [
        108.80584716796875,
        47.80762081718071
      ],
      [
        108.84979248046875,
        47.76886840424207
      ],
      [
        108.92120361328125,
        47.76148371616669
      ],
      [
        108.98162841796875,
        47.74486433470359
      ],
      [
        109.11895751953125,
        47.68388118858139
      ],
      [
        109.16290283203125,
        47.63948497925488
      ],
      [
        109.19036865234375,
        47.60616304386874
      ],
      [
        109.28375244140625,
        47.585789182379905
      ],
      [
        109.33319091796875,
        47.56170075451973
      ],
      [
        109.38812255859375,
        47.54872547286774
      ],
      [
        109.45678710937499,
        47.489368981370724
      ],
      [
        109.522705078125,
        47.48194469821279
      ],
      [
        109.54742431640625,
        47.46337939935778
      ],
      [
        109.59136962890625,
        47.46709298382174
      ],
      [
        109.73968505859375,
        47.44294999517949
      ],
      [
        109.81109619140625,
        47.45780853075031
      ],
      [
        109.86053466796875,
        47.41507892620101
      ],
      [
        110.15167236328125,
        47.42622912485741
      ],
      [
        110.29449462890625,
        47.396490013933416
      ],
      [
        110.3741455078125,
        47.37789454155521
      ],
      [
        110.45654296875,
        47.3834738721015
      ],
      [
        110.621337890625,
        47.336961408985005
      ],
      [
        110.69000244140625,
        47.27922900257082
      ],
      [
        110.950927734375,
        47.28109232255293
      ],
      [
        111.09649658203125,
        47.28295557691231
      ],
      [
        111.22833251953125,
        47.301584511330795
      ],
      [
        111.24755859375,
        47.26059219342468
      ],
      [
        111.3629150390625,
        47.20650833393468
      ],
      [
        111.71173095703125,
        47.075733642316195
      ],
      [
        111.83258056640625,
        47.0439255239614
      ],
      [
        111.96716308593749,
        47.034566583590426
      ],
      [
        111.98638916015625,
        47.010225655683485
      ],
      [
        112.0001220703125,
        47.00086080525214
      ],
      [
        112.0166015625,
        46.98587362966405
      ],
      [
        112.23358154296875,
        46.92025531537451
      ],
      [
        112.2747802734375,
        46.90712199744459
      ],
      [
        112.33245849609375,
        46.84516443029276
      ],
      [
        112.53570556640624,
        46.84328581149685
      ],
      [
        112.58514404296875,
        46.837649560937464
      ],
      [
        112.7252197265625,
        46.76244305208004
      ],
      [
        112.9229736328125,
        46.76808718675661
      ],
      [
        113.21136474609375,
        46.677710064644344
      ],
      [
        113.28826904296875,
        46.67205646734499
      ]
    ],
  };
  constructor(
    private ngZone: NgZone,
    private message: NzMessageService
  ) { }  
  ngOnInit() {
    this.coreMap = true;
  }


  onLoad(map: Map) {
    map.addControl(new mapboxgl.NavigationControl());
    map.touchZoomRotate.enable();
    map.doubleClickZoom.enable();
    const layers = map.getStyle().layers!;
    for (let i = 0; i < layers.length; i++) {
      if (layers[i].type === 'symbol' && (<SymbolLayout>layers[i].layout)['text-field']) {
        this.labelLayerId = layers[i].id;
        break;
      }
    }
    // map.removeLayer(this.labelLayerId);
    console.log(this.navigation)
  }

  search(){
    // хэнтий, дорнод сүхбаатар 3 сонголттой 
    if(this.location2 == 'Дорнод'){
      console.log('Дорнод');
      this.dornod = true;
      this.khentii = false;
      this.sukhbaatar = false;
      this.coreMap = false;
    }else if (this.location2 == 'Хэнтий'){
      // map.removeLayer(id);
      console.log('Хэнтий');
      this.dornod = false;
      this.khentii = true;
      this.sukhbaatar = false;
      this.coreMap = false;
    }else if (this.location2 == 'Сүхбаатар'){
      console.log('Сүхбаатар');
      this.dornod = false;
      this.khentii = false;
      this.sukhbaatar = true;
      this.coreMap = false;
    }else {
      this.message.create('error', `Одоогоор боломжгүй байна!`)
    }
  }
  reset(){
    window.location.reload();
  }


  isVisible = false;
  isVisibleBars = false;
  isVisibleNuur = false;

  showModal(value): void {
    console.log(value);
    if(value == 'цав'){
      this.isVisible = true;
    }else if(value == 'барс'){
      this.isVisibleBars = true;
    }else if(value == 'нуур'){
      this.isVisibleNuur = true;
    }
  }

  isVisibleKhaldun = false;
  isVisibleKhiid = false;
  isVisibleKhoshoo = false;
  showModalKhentii(value): void {
    console.log(value);
    if(value == 'халдун'){
      this.isVisibleKhaldun = true;
    }else if(value == 'хийд'){
      this.isVisibleKhiid = true;
    }else if(value == 'хөшөө'){
      this.isVisibleKhoshoo = true;
    }
  }
  isVisibleOvoo = false;
  isVisibleBogd = false;
  isVisibleChuluu = false;
  showModalSukhbaatar(value): void {
    console.log(value);
    if(value == 'овоо'){
      this.isVisibleOvoo = true;
    }else if(value == 'богд'){
      this.isVisibleBogd = true;
    }else if(value == 'чулуу'){
      this.isVisibleChuluu = true;
    }
  }

  isVisibleGuren = false;
  isVisibleBurged = false;
  isVisibleBaaz = false;
  showModalHotelDornod(value){
    console.log(value);
    if(value == 'гүрэн'){
      this.isVisibleGuren = true;
    }else if(value == 'бүргэд'){
      this.isVisibleBurged = true;
    }else if(value == 'бааз'){
      this.isVisibleBaaz = true;
      
    }
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  isVisibleAr = false;
  isVisibleJonon = false;
  isVisibleErdene = false;
  showModalHotelKhentii(value){
    console.log(value);
    if(value == 'ar'){
      this.isVisibleAr = true;
    }else if(value == 'jonon'){
      this.isVisibleJonon = true;
    }else if(value == 'erdene'){
      this.isVisibleErdene = true;
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.isVisibleBars = false;
    this.isVisibleNuur = false;
    this.isVisibleKhaldun = false;
    this.isVisibleKhiid = false;
    this.isVisibleKhoshoo = false;
    this.isVisibleOvoo = false;
    this.isVisibleBogd = false;
    this.isVisibleChuluu = false;
    this.isVisibleGuren = false;
    this.isVisibleBurged = false;
    this.isVisibleBaaz = false;
    this.isVisibleAr = false;
    this.isVisibleJonon = false;
    this.isVisibleErdene = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.isVisibleBars = false;
    this.isVisibleNuur = false;
    this.isVisibleKhaldun = false;
    this.isVisibleKhiid = false;
    this.isVisibleKhoshoo = false;
    this.isVisibleOvoo = false;
    this.isVisibleBogd = false;
    this.isVisibleChuluu = false;
    this.isVisibleGuren = false;
    this.isVisibleBurged = false;
    this.isVisibleBaaz = false;
    this.isVisibleAr = false;
    this.isVisibleJonon = false;
    this.isVisibleErdene = false;
  }

  createMessage(type: string): void {
   
  }

  order(type: string): void {
    this.message.create(type, `Амжилттай захиаллаа`);
    this.isVisibleGuren = false;
    this.isVisibleBurged = false;
    this.isVisibleBaaz = false;
    this.isVisibleAr = false;
    this.isVisibleJonon = false;
    this.isVisibleErdene = false;
  }
}
