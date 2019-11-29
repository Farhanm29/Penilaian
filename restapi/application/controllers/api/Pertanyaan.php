<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';

class Pertanyaan extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model("Pertanyaan_model", "PertanyaanModel");
    }

    public function GetPertanyaan()
    {
        $id = $_GET;
        $Output = $this->PertanyaanModel->get($id);
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

    public function InsertPertanyaan()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->PertanyaanModel->insert($data);
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

    public function UpdatePertanyaan()
    {
        $data = json_decode($this->input->raw_input_stream);
        $result = $this->PertanyaanModel->update($data);
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

        

    public function DeletePertanyaan()
    {
        $id = $_GET;
        $result = $this->PertanyaanModel->delete($id);
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