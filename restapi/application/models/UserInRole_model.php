<?php

class Userinrole_Model extends CI_Model
{
    public function insert($data)
    {
        $result = $this->db->insert("userinrole", $data);
        $result = $this->db->query("
        SELECT
                `userinrole`.`iduserinrole`,
                `userinrole`.`idUser`,  
                `user`.`Username`,
                `userinrole`.`idrole`,
                `role`.`Nama_role`,
                `user`.`Pasword`,
                `user`.`email`,
                `user`.`Nama`
            FROM
            `user`
            RIGHT JOIN `userinrole` ON `userinrole`.`idUser` = `user`.`Username`
            LEFT JOIN `role` ON `userinrole`.`idrole` = `role`.`Nama_role`
        ");
        return $result;
    }

    public function get($id)
    {
        if($id != null){
            $this->db->where("iduserinrole", $id['iduserinrole']);
            $result =  $this->db->get("userinrole");
            $result = $this->db->query("
            SELECT
                `userinrole`.`iduserinrole`,
                `userinrole`.`idUser`,
                `user`.`Username`,
                `userinrole`.`idrole`,
                `role`.`Nama_role`,
                `user`.`Pasword`,
                `user`.`email`,
                `user`.`Nama`
            FROM
            `user`
            RIGHT JOIN `userinrole` ON `userinrole`.`idUser` = `user`.`Username`
            LEFT JOIN `role` ON `userinrole`.`idrole` = `role`.`Nama_role`
            
            ");
        return $result->result_array();
        }else{
            $result =  $this->db->query("
            SELECT
                `userinrole`.`iduserinrole`,
                `userinrole`.`idUser`,
                `user`.`Username`,
                `userinrole`.`idrole`,
                `role`.`Nama_role`,
                `user`.`Pasword`,
                `user`.`email`,
                `user`.`Nama`
            FROM
            `user`
            RIGHT JOIN `userinrole` ON `userinrole`.`idUser` = `user`.`Username`
            LEFT JOIN `role` ON `userinrole`.`idrole` = `role`.`Nama_role`
            ");

            return $result->result_array();
        }
    }

    public function update($data)
    {
        $this->db->where("kdmk", $data->kdmk);
        $result = $this->db->update("userinrole", $data);
        return $result;
    }

    public function delete($id)
    {
        $this->db->where("kdmk", $id['kdmk']);
            $result =  $this->db->delete("userinrole");
            return $result;
    }
    
}
