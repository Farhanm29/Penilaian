<?php

class User_model extends CI_Model
{
    public function login($data)
    {
        $Pasword = $data['Pasword'];
        $Username = $data['Username'];
        $result = $this->db->query("
            SELECT * FROM user WHERE (Username = '$Username' OR email = '$Username') AND Pasword = '$Pasword'
        ");
        if($result->num_rows()>0){
            $message = [
                "data"=> $result->result_array(),
                "Status" => true
            ];
            return $message;
        }else{
            $message = [
                "Status" => true
            ];
            return $message;
        }
    }
}
