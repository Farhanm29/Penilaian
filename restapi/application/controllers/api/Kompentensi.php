<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';

class Kompentensi extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model("Kompetensi_model", "KompetensiModel");
    }


    public function Pertanyaan()
    {
        $Output = $this->KompetensiModel->GetPertanyaan();
        if(!empty($Output)){
            $this->api_return(
                [
                    "result"=>$Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "result"=>"ko tra ada data"
                ], 400
            );
        }
    }

    public function GetKompetensi()
    {
        $id = $_GET;
        $Output = $this->KompetensiModel->get($id);
        if(!empty($Output)){
            $this->api_return(
                [
                    "result"=>$Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "result"=>"ko tra ada data"
                ], 400
            );
        }
    }

    public function InsertKompetensi()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->KompentensiModel->insert($data);
        if($Output){
            $this->api_return(
                [
                    "result"=>$Output
                ], 200
            );
        }else{
            $this->api_return(
                [
                    "result"=>$Output
                ], 400
            );
        }
    }

    public function UpdateKompentensi()
    {
        $data = json_decode($this->input->raw_input_stream);
        $result = $this->KompentensiModel->update($data);
        if ($result){
            $this->api_return(
                [
                    'status'=>true
                ],
            200);
        }else{
            $this->api_return(
                [
                    'status'=>false
                ],
            400);
        }
    }

        

    public function DeleteKompentensi()
    {
        $id = $_GET;
        $result = $this->KompentensiModel->delete($id);
        if ($result){
            $this->api_return(
                [
                    'status'=>true
                ],
            200);
        }else{
            $this->api_return(
                [
                    'status'=>false
                ],
            400);
        }
    }
}