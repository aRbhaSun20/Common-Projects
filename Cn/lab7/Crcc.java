import java.util.*;

class Crcc{
	public String Crc (String dividend, String divisor){
		String str,div;
		while (divisor.length() <= dividend.length()){
			div = dividend.substring(0,divisor.length());
			str = Integer.toBinaryString(Integer.parseInt(div,2)^Integer.parseInt(divisor,2));
			int j = divisor.length();
			str += dividend.substring(j,dividend.length());
			dividend=str;
		}
		return dividend;
	
	}
	
	public static void main(String args[]){
		String checksum,data,syn,dividend,receivedData;
		int padding;
		String polynomial = "10001000000100001";
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the data to encrypt");
		data = sc.next();
		dividend = data;
		padding = polynomial.length() - 1;
		for(int i = 0; i < padding; i++)
			dividend += "0";
		Crcc obj = new Crcc();
		checksum = obj.Crc(dividend,polynomial);
		data +=checksum;
		System.out.println("Sender checksum " + checksum);
		System.out.println("Codeword transmitted over network : " + data);
		System.out.println("Enter the received codeword : ");
		receivedData = sc.next();
		
		syn = obj.Crc(receivedData,polynomial);
		
		if(Long.parseLong(syn) == 0)
			System.out.println("No error in data transmission");
		else
			System.out.println("Error in transmission");
		sc.close();
	}

}
