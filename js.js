

var app = new Vue({
  el: '#app',
  data: {
    loading:false,
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
          alert('Ayo coba lagi, untuk dapat SCORE lebih tinggi');
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
        // this.selesai();
        this.showScore = true;
        }
        
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
           alert("Dapat pulsa 25K untuk 5 score tertinggi (unik User)")
        //   akses DB ketika diakses
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



        // var url = `https://script.google.com/macros/s/AKfycby9VK3eyaJX2BbISPK2M_VODyLvRCkDVQSTnx6lz7YNEpeWWH1d-fT4Ce3oDodwNvwz/exec?action=insert&table=diakses&data={"timestamp":"123"}}`;

        // this.DataUser = [];

        // var url ="https://script.google.com/macros/s/AKfycby9VK3eyaJX2BbISPK2M_VODyLvRCkDVQSTnx6lz7YNEpeWWH1d-fT4Ce3oDodwNvwz/exec?action=read&table=diakses";

        // $.getJSON(url, function (json) {
        // // console.log(json.data);
        // app.DataUser = json.data;
        // });

      }


})

