

var app = new Vue({
  el: '#app',
  data: {
    loading:false,
    harusInput:false,
    calc:'',
    value:null,
    angka1:0,
    angka2:0,
    kunci:'',
    warning:'',
    showWarning:false,
    waktuawal:'',
    waktujawab:[],
    totalpoint:0,
    start:true,
    klik1:'',
    klik2:'',
    soal_ke:0,
    tanggal:new Date(),
    DataUser:[],
    nama:'',
    kontak:'',
    DataScore:[],
    showScore:false,
    showSponsor:false,
    tombolCloseSponsor:false,
    hadiahSponsor:'5 Pulsa @25K',
    imageSponsor:'data:image/jpeg;base64,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',
    urlIGSponsor:'https://www.instagram.com/nu2883/',
    igSponsor:'@nu2883',

    

  },
  computed:{
    point(){
        let point1 = 0;
        let po = 0;
        let po1 = 0;
        if(this.klik1  && this.klik2 ){
            if(this.soal_ke % 2 == 0){
                po = this.klik2 - this.klik1;
                
            }if(this.soal_ke % 2 != 0){
                po = this.klik1 - this.klik2;
            }
            po1 = (10000-po);
        }
        point1 +=po1;
        return point1 ;
    }
  },
  methods:{
      setMod(x){
          this.calc += x+1
      },
      reset(){
          this.value = null
          this.calc = ''
      },
      clearWarning(){
        this.showWarning = false;
        this.warning = '';
      },
      enter(){
        if(this.calc == this.kunci){
            let wakt = new Date().getTime();
            this.waktujawab.push(wakt);
            

            if(this.soal_ke % 2 == 0){
                this.klik1 = wakt;
            }if(this.soal_ke % 2 != 0){
                this.klik2 = wakt;
            }


            
            this.totalpoint += 10 ;
            this.warning = '';
            // alert('benar')
            this.calc = ''
            let angka1 = Math.floor(Math.random() * 9) + 1;
            let angka2 = Math.floor(Math.random() * 9) + 1;
            
            this.angka1 = angka1;
            this.angka2 = angka2;
            this.kunci = angka1*angka2; 
            
            
            this.soal_ke +=1;
        }
        else{
        this.warning = 'Salah';
        this.showWarning = true;
        this.calc = '';
        setTimeout(
            this.clearWarning, 
        2000);
        }


      },
      mulai(){
          let angka1 = Math.floor(Math.random() * 9) + 1;
          let angka2 = Math.floor(Math.random() * 9) + 1;
    
          this.angka1 = angka1;
          this.angka2 = angka2;
          this.kunci = angka1*angka2;

          let wakt = new Date().getTime();
          this.klik2 = wakt;



        //   ketika dimainkan
        var vId = Date.now();
        // var vUserName = this.UserName.toString();
        // var vPassword = this.Password.toString();
        var vNama = this.tanggal.toString();
            // var lin = `https://script.google.com/macros/s/AKfycbxPUz9dizZwqWDEb05GHAEMIc36E4i8n8VK4d1vD189y8jR0SnExeWU7xYeUdVFNnVY/exec?action=insert&table=users&data={"id":${vId},"userName":"${vUserName}","Password":"${vPassword}","Nama":"${vNama}"}`;
            var lin = `https://script.google.com/macros/s/AKfycby9VK3eyaJX2BbISPK2M_VODyLvRCkDVQSTnx6lz7YNEpeWWH1d-fT4Ce3oDodwNvwz/exec?action=insert&table=dimainkan&data={"timestamp":${vId},"tanggal":"${vNama}"}`;

            // this.test = lin;
            
            $.ajax({
            type: 'GET',
            url: lin,
            crossDomain: true,
            dataType: 'jsonp',
            dataType: "text",
            success: function(resultData) { 
                // app.register_form = false;
                // app.loading=false;
                // app.login();
            }
            });

    
      },
      waktuhabis(){
        // alert('waktuhabis')
        this.loading = true;
      },
      mstart(){
        this.start=false; 
          this.calc = '';
        this.mulai();
        setTimeout(
            this.waktuhabis, 
        60000);
        
      },
      selesai(){
          this.loading = false;
          this.totalpoint = 0;
          this.angka1 = 0;
          this.angka2 = 0;
          this.klik1 = 0;
          this.klik2 = 0;
          this.start = true;
          this.calc = '';
          this.showScore = false;
          this.tombolCloseSponsor = false;
          alert('Ayo coba lagi, untuk dapat SCORE lebih tinggi');
          this.harusInput = false;
          
      },
      simpanData(){
          if(this.nama && this.kontak){
        var vId = Date.now();
        var vNama = this.nama.toString();
        var vKontak = this.kontak.toString();
        var vScore = this.totalpoint.toString();
        var vTanggal = this.tanggal.toString();
            // var lin = `https://script.google.com/macros/s/AKfycbxPUz9dizZwqWDEb05GHAEMIc36E4i8n8VK4d1vD189y8jR0SnExeWU7xYeUdVFNnVY/exec?action=insert&table=users&data={"id":${vId},"userName":"${vUserName}","Password":"${vPassword}","Nama":"${vTanggal}"}`;
            var lin = `https://script.google.com/macros/s/AKfycby9VK3eyaJX2BbISPK2M_VODyLvRCkDVQSTnx6lz7YNEpeWWH1d-fT4Ce3oDodwNvwz/exec?action=insert&table=score&data={"timestamp":${vId},"tanggal":"${vTanggal}","nama":"${vNama}","kontak":"${vKontak}","score":"${vScore}"}`;

            // this.test = lin;
            
            $.ajax({
            type: 'GET',
            url: lin,
            crossDomain: true,
            dataType: 'jsonp',
            dataType: "text",
            success: function(resultData) { 
                // app.register_form = false;
                // app.loading=false;
                // app.login();
                app.ambilScore();
            }
        });
        this.mshowSponsor();

        this.showScore = true;
        }
        
      this.harusInput = true;
        
      },
      mshowSponsor(){
        this.showSponsor = true;
        this.mshowTombolClose();
      },
      mshowTombolClose(){ 
      
        setTimeout(
            this.mtombolClose, 
        3000);
      
      },
      mtombolClose(){
        this.tombolCloseSponsor = true;
      },

      ambilScore(){
        //   alert('ambil data');
        this.DataScore = [];

        var url ="https://script.google.com/macros/s/AKfycby9VK3eyaJX2BbISPK2M_VODyLvRCkDVQSTnx6lz7YNEpeWWH1d-fT4Ce3oDodwNvwz/exec?action=read&table=query";

        $.getJSON(url, function (json) {
        // console.log(json.data);
        app.DataScore = json.data;
        });

        // alert('selesai ambil data');

      }
    


  },

  watch: {
        soal_ke(){
            this.totalpoint += this.point;
        //   if(this.soal_ke == this.soal.length){
        //     // alert("Selamat Anda Telah Menyelesaikan Level ini");
        //     this.showHasil = true;
        //     this.showSoal = false;
        //     this.soal_ke = 0;
        //     this.soal = [];
            
          }
        
      },
      created(){
        //   akses DB ketika diakses
        alert("Dapat pulsa 25K untuk 5 score tertinggi (unik user), waktu game : 60 detik");
        var vId = Date.now();
        // var vUserName = this.UserName.toString();
        // var vPassword = this.Password.toString();
        var vNama = this.tanggal.toString();
            // var lin = `https://script.google.com/macros/s/AKfycbxPUz9dizZwqWDEb05GHAEMIc36E4i8n8VK4d1vD189y8jR0SnExeWU7xYeUdVFNnVY/exec?action=insert&table=users&data={"id":${vId},"userName":"${vUserName}","Password":"${vPassword}","Nama":"${vNama}"}`;
            var lin = `https://script.google.com/macros/s/AKfycby9VK3eyaJX2BbISPK2M_VODyLvRCkDVQSTnx6lz7YNEpeWWH1d-fT4Ce3oDodwNvwz/exec?action=insert&table=diakses&data={"timestamp":${vId},"tanggal":"${vNama}"}`;

            // this.test = lin;
            
            $.ajax({
            type: 'GET',
            url: lin,
            crossDomain: true,
            dataType: 'jsonp',
            dataType: "text",
            success: function(resultData) { 
                // app.register_form = false;
                // app.loading=false;
                // app.login();
            }
            });

          //   setTimeout(
          //     alert("Dapat pulsa 25K untuk 5 score tertinggi (unik user)"), 
          // 10);
            

      }


})

