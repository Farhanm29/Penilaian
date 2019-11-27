<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH . '/libraries/API_Controller.php';

class Userinrole extends API_Controller
{
    public function __construct() {
        parent::__construct();
        $this->load->model("Userinrole_model", "UserinroleModel");
    }

    public function GetUserinrole()
    {
        $id = $_GET;
        $Output = $this->UserinroleModel->get($id);
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

    public function InsertUserinrole()
    {
        $data = json_decode($this->input->raw_input_stream);
        $Output = $this->UserinroleModel->insert($data);
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

    public function UpdateUserinrole()
    {
        $data = json_decode($this->input->raw_input_stream);
        $result = $this->UserinroleModel->update($data);
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

        

    public function DeleteUserinrole()
    {
        $id = $_GET;
        $result = $this->UserinroleModel->delete($id);
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