import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, provideHttpClientTesting()],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform GET request', () => {
    const mockResponse = { data: 'test' };
    const url = 'https://api.example.com/data';

    service.get(url).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should perform POST request', () => {
    const mockResponse = { success: true };
    const url = 'https://api.example.com/data';
    const body = { key: 'value' };

    service.post(url, body).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(body);
    req.flush(mockResponse);
  });

  it('should perform PUT request', () => {
    const mockResponse = { success: true };
    const url = 'https://api.example.com/data';
    const body = { key: 'value' };

    service.put(url, body).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(body);
    req.flush(mockResponse);
  });

  it('should perform PATCH request', () => {
    const mockResponse = { success: true };
    const url = 'https://api.example.com/data';
    const body = { key: 'value' };

    service.patch(url, body).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('PATCH');
    expect(req.request.body).toEqual(body);
    req.flush(mockResponse);
  });

  it('should perform DELETE request', () => {
    const mockResponse = { success: true };
    const url = 'https://api.example.com/data';

    service.delete(url).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockResponse);
  });
});
