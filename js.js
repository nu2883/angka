

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
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

                var waktu1 = Date.now();
                // var lin = `https://script.google.com/macros/s/AKfycbzd5-oHv1vCIJvUuk-bwfnLPPUtaN8ZUQxxDDjo4V3QnzaTXUgPFrbqol4lIQubLdPX/exec?action=insert&table=dataSETORAN&data={"id":${waktu1},"Bulan":${sbulan}, "TGL_BUKU":"'${sTGL_BUKU}","NAMA_PENYETOR":"${this.PENYETOR}","NTPN":"'${sNTPN}","NTB":"'${sNTB}","NPWP":"${this.NPWP}","AKUN":"${this.AKUN}","NILAI_SETOR":"${this.NILAI}","LINK":"${this.LING}","BUPOT":" ","KET":" ","BILLING":" "}`;
                var url = `https://script.google.com/macros/s/AKfycbxPUz9dizZwqWDEb05GHAEMIc36E4i8n8VK4d1vD189y8jR0SnExeWU7xYeUdVFNnVY/exec?action=update&table=inputFilter&id=1&data={"user":"${vUserName}"}`
                this.test = url;
                
                $.ajax({
                type: 'GET',
                url: url,
                crossDomain: true,
                dataType: 'jsonp',
                dataType: "text",
                success: function(resultData) { 
                    app.login_form = false;
                    app.GetDataUser();
                    app.GetData();
                    app.loading=false;
                }
                });
      }


})

